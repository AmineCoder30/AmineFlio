import { Bot, Sparkles } from "lucide-react";
import { useState } from "react";

export default function BotChat({ handleClick }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      className="fixed bottom-8 right-8 group z-50"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl bg-card-bg border border-border text-text text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0 pointer-events-none whitespace-nowrap shadow-xl">
        AI Assistant
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-card-bg border-b border-r border-border rotate-45"></div>
      </div>

      {/* Bot Icon Container */}
      <div className="relative">
        {/* Magic Glow Effect */}
        {/* <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div> */}
        
        {/* Main button */}
        <div className="relative bg-gradient-to-br from-card-bg to-card-bg h-14 w-14 flex items-center justify-center rounded-full shadow-xl border border-white/10 cursor-pointer animate-floating overflow-hidden">
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shimmer"></div>

          <Bot className="w-7 h-7 text-white transition-transform duration-500 group-hover:rotate-12 relative z-10" />
          
          {/* Sparkles inside */}
          <Sparkles className="absolute top-2 right-2 w-3 h-3 text-yellow-300 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 animate-pulse" />
          <Sparkles className="absolute bottom-2 left-2 w-2 h-2 text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-pulse" />
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }

        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        .animate-tilt {
          animation: tilt 5s infinite linear;
        }
      `}</style>
    </button>
  );
}
