import { useState, useRef, useEffect } from "react";

import BotMessage from "../ui/BotMessage";
import { getProjectEstimation } from "../../services/gemini";
import { Send, X, Loader2, Bot } from "lucide-react";

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
      // Don't add to animatedMessageIds yet - let the component do it after animation completes
    } catch (error) {
      const errorMessageId = Date.now() + 1;
      const errorMessage = {
        id: errorMessageId,
        text: "Sorry, something went wrong. Please try again.",
        sender: "bot",
        error: error,
      };
      setMessages((prev) => [...prev, errorMessage]);
      // Don't add to animatedMessageIds yet
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed md:bottom-10 p-2 md:p-0 bottom-0 md:right-10 right-0 z-50  flex flex-col items-end">
      {isOpen && (
        <div className="fixed inset-0 m-4 md:relative md:inset-auto md:bottom-0 md:right-10 md:w-[400px] md:h-[500px] bg-card-bg border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 border-b border-border flex justify-between items-center bg-sidebar-bg">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary/20 rounded-full">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text">AI Assistant</h3>
                <p className="text-xs text-text-secondary">Project Estimator</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="p-1 hover:bg-white/10 rounded-full transition-colors text-text-secondary hover:text-text"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => {
              // Check if this message has already been animated
              const hasBeenAnimated = animatedMessageIds.current.has(msg.id);
              const shouldAnimate = msg.sender === "bot" && !hasBeenAnimated;
              
              return (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-sidebar-bg text-text rounded-bl-none border border-border"
                    }`}
                  >
                    {msg.sender === "bot" ? (
                      <BotMessage 
                        text={msg.text} 
                        scrollRef={scrollRef} 
                        isNew={shouldAnimate}
                        onAnimationComplete={() => {
                          // Mark this message as animated
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
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-sidebar-bg p-3 rounded-2xl rounded-bl-none border border-border flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  <span className="text-xs text-text-secondary">
                    Thinking...
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="p-4 border-t border-border bg-card-bg"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                ref={inputRef}
                placeholder="Describe your project..."
                className="flex-1 bg-sidebar-bg border border-border rounded-lg px-4 py-2 text-sm text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-text-secondary/50"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
      {
        // !isOpen && (
        //   // <div onClick={toggleChat}>
        //   <BotChat handleClick={toggleChat} />
        // )
        // </div>
      }
    </div>
  );
}
