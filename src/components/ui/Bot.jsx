import { Bot, Sparkles } from "lucide-react";

export default function BotChat({ handleClick }) {
  return (
    <button
      className="group z-50 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
      onClick={handleClick}
      aria-label="Open AI Assistant"
    >
      {/* Tooltip */}
      <div
        className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-card-bg border border-border text-text text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 ease-out translate-y-1 group-hover:translate-y-0 pointer-events-none whitespace-nowrap shadow-lg"
        role="tooltip"
      >
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-primary" />
          AI Assistant
        </span>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-card-bg border-b border-r border-border rotate-45"></div>
      </div>

      {/* Bot Icon Container */}
      <div className="relative">
        {/* Glow on hover */}
        <div className="absolute -inset-1 bg-primary/30 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-300"></div>

        {/* Main button */}
        <div className="relative bg-card-bg h-10 w-10 flex items-center justify-center rounded-xl border border-border group-hover:border-primary/40 cursor-pointer overflow-hidden transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:shadow-primary/10">
          {/* Hover background fill */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Bot Icon */}
          <Bot className="w-[18px] h-[18px] text-text-secondary group-hover:text-primary transition-all duration-300 group-hover:scale-110 relative z-10" />

          {/* Status dot */}
          <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_4px_rgba(34,197,94,0.6)]"></div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </button>
  );
}
