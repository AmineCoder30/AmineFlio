import { Bot, Sparkles } from "lucide-react";
import { useState } from "react";

export default function BotChat({ handleClick }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      className="group z-50 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
      aria-label="Open AI Assistant"
    >
      {/* Tooltip */}
      <div 
        className="absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2.5 rounded-lg bg-card-bg border-2 border-primary/30 text-text text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out -translate-y-1 group-hover:translate-y-0 pointer-events-none whitespace-nowrap shadow-2xl backdrop-blur-sm"
        role="tooltip"
      >
        <span className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
          AI Assistant
        </span>
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-card-bg border-b-2 border-r-2 border-primary/30 rotate-45"></div>
      </div>

      {/* Bot Icon Container */}
      <div className="relative">
        {/* Animated Glow Ring */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary-hover rounded-lg opacity-0 group-hover:opacity-75 blur-sm transition-all duration-500 animate-glow-pulse"></div>

        {/* Main button */}
        <div className="relative bg-gradient-to-br from-card-bg to-card-hover h-12 w-12 flex items-center justify-center rounded-lg border-2 border-border group-hover:border-primary/50 cursor-pointer animate-floating overflow-hidden transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20">
          
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/30 to-transparent translate-x-[-100%] group-hover:animate-shimmer"></div>

          {/* Bot Icon */}
          <Bot className="w-6 h-6 text-text group-hover:text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10 drop-shadow-sm" />

          {/* Sparkles */}
          <Sparkles className="absolute top-1 right-1 w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 animate-sparkle-1" />
          <Sparkles className="absolute bottom-1 left-1 w-2.5 h-2.5 text-accent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-sparkle-2" />
          
          {/* Corner accent dot */}
          <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes floating {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-6px);
          }
        }

        @keyframes shimmer {
          0% { 
            transform: translateX(-100%); 
          }
          100% { 
            transform: translateX(100%); 
          }
        }

        @keyframes glow-pulse {
          0%, 100% { 
            opacity: 0.5;
            transform: scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes sparkle-1 {
          0%, 100% { 
            opacity: 0;
            transform: scale(0.8) rotate(0deg);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }

        @keyframes sparkle-2 {
          0%, 100% { 
            opacity: 0;
            transform: scale(0.8) rotate(0deg);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2) rotate(-180deg);
          }
        }

        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out;
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        .animate-sparkle-1 {
          animation: sparkle-1 1.5s ease-in-out infinite;
        }

        .animate-sparkle-2 {
          animation: sparkle-2 1.5s ease-in-out infinite 0.3s;
        }
      `}</style>
    </button>
  );
}
