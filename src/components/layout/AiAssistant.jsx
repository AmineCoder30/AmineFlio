import { useState, useRef, useEffect } from "react";

import BotMessage from "../ui/BotMessage";
import { getProjectEstimation } from "../../services/gemini";
import { Send, X, Bot, Sparkles, ArrowDown } from "lucide-react";

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. Describe your project or ask anything about Amine, and I'll help you with the right answer or an accurate estimation.",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const scrollRef = useRef(null);

  // Track which messages have already been animated
  const animatedMessageIds = useRef(new Set([1])); // Initial message is pre-animated

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  // Detect if user has scrolled up
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    setShowScrollBtn(scrollHeight - scrollTop - clientHeight > 80);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Listen for a global event so other components (like Navbar) can open the chat
  useEffect(() => {
    const openHandler = () => {
      setIsOpen(true);
      // focus the input shortly after opening
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 150);
    };

    window.addEventListener("open-ai-chat", openHandler);
    return () => window.removeEventListener("open-ai-chat", openHandler);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await getProjectEstimation(input);
      const botMessageId = Date.now() + 1;
      const botMessage = {
        id: botMessageId,
        text: response,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessageId = Date.now() + 1;
      const errorMessage = {
        id: errorMessageId,
        text: "Sorry, something went wrong. Please try again.",
        sender: "bot",
        error: error,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Backdrop overlay on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleChat}
          aria-hidden="true"
        />
      )}

      <div className="fixed bottom-0 right-0 md:bottom-6 md:right-6 z-50 flex flex-col items-end">
        {isOpen && (
          <div
            className="
              fixed inset-0 
              md:relative md:inset-auto md:w-[420px] md:h-[560px] md:rounded-2xl
              bg-card-bg border-0 md:border md:border-border
              shadow-2xl flex flex-col overflow-hidden
              animate-in slide-in-from-bottom-5 duration-300
            "
            role="dialog"
            aria-label="AI Assistant Chat"
          >
            {/* ─── Header ─── */}
            <div className="relative px-5 py-4 flex justify-between items-center border-b border-border bg-card-bg">
              {/* Subtle gradient accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary opacity-80"></div>

              <div className="flex items-center gap-3">
                {/* Bot avatar */}
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/20">
                    <Bot className="w-[18px] h-[18px] text-primary" />
                  </div>
                  {/* Online indicator */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-card-bg"></div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text leading-tight flex items-center gap-1.5">
                    AI Assistant
                    <Sparkles className="w-3 h-3 text-primary" />
                  </h3>
                  <p className="text-[11px] text-text-secondary mt-0.5">Always online · Ask me anything</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="p-1.5 hover:bg-surface rounded-lg transition-colors text-text-secondary hover:text-text"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* ─── Messages ─── */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "var(--color-border) transparent",
              }}
            >
              {messages.map((msg) => {
                const hasBeenAnimated = animatedMessageIds.current.has(msg.id);
                const shouldAnimate = msg.sender === "bot" && !hasBeenAnimated;
                const isUser = msg.sender === "user";

                return (
                  <div
                    key={msg.id}
                    className={`flex items-end gap-2 ${
                      isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    {/* Bot avatar (only for bot messages) */}
                    {!isUser && (
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mb-0.5">
                        <Bot className="w-3 h-3 text-primary" />
                      </div>
                    )}

                    <div
                      className={`max-w-[80%] px-3.5 py-2.5 text-sm whitespace-pre-wrap ${
                        isUser
                          ? "bg-primary text-white rounded-2xl rounded-br-sm shadow-sm shadow-primary/20"
                          : "bg-sidebar-bg text-text rounded-2xl rounded-bl-sm border border-border"
                      }`}
                    >
                      {msg.sender === "bot" ? (
                        <BotMessage
                          text={msg.text}
                          scrollRef={scrollRef}
                          isNew={shouldAnimate}
                          onAnimationComplete={() => {
                            animatedMessageIds.current.add(msg.id);
                          }}
                        />
                      ) : (
                        msg.text
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex items-end gap-2 justify-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center mb-0.5">
                    <Bot className="w-3 h-3 text-primary" />
                  </div>
                  <div className="bg-sidebar-bg px-4 py-3 rounded-2xl rounded-bl-sm border border-border">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-text-secondary/50 rounded-full animate-bounce [animation-delay:0ms]"></span>
                      <span className="w-1.5 h-1.5 bg-text-secondary/50 rounded-full animate-bounce [animation-delay:150ms]"></span>
                      <span className="w-1.5 h-1.5 bg-text-secondary/50 rounded-full animate-bounce [animation-delay:300ms]"></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Scroll to bottom button */}
            {showScrollBtn && (
              <div className="absolute bottom-[76px] left-1/2 -translate-x-1/2 z-10">
                <button
                  onClick={scrollToBottom}
                  className="p-1.5 rounded-full bg-card-bg border border-border shadow-lg hover:shadow-xl transition-all hover:scale-105 text-text-secondary hover:text-text"
                  aria-label="Scroll to bottom"
                >
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* ─── Input ─── */}
            <form
              onSubmit={handleSend}
              className="px-4 py-3 border-t border-border bg-card-bg"
            >
              <div className="flex items-center gap-2 bg-sidebar-bg rounded-xl border border-border focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all duration-200 px-3 py-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  ref={inputRef}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent py-2 text-sm text-text focus:outline-none placeholder:text-text-secondary/40"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="flex-shrink-0 p-2 bg-primary text-white rounded-lg hover:bg-primary-hover disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-md hover:shadow-primary/20 active:scale-95"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-text-secondary/40 text-center mt-2 select-none">
                Powered by AI · Responses may not be 100% accurate
              </p>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
