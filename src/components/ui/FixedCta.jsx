import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function FixedCta() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-10 bottom-40 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`group flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card-bg text-text-secondary shadow-lg transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-xl hover:-translate-y-0.5 cursor-pointer ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} strokeWidth={2.5} />
      </button>

      {/* CTA — WhatsApp */}
      <a
        href="https://wa.me/212651167495"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.4)] transition-all duration-500 hover:bg-[#20bd5a] hover:shadow-[0_15px_35px_-5px_rgba(37,211,102,0.6)] hover:-translate-y-2 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 drop-shadow-md group-hover:drop-shadow-none transition-all duration-300"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.653-1.482-1.459-1.655-1.757-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Slow Radar Ping Animation */}
        <span
          className="absolute -z-10 w-full h-full rounded-full bg-[#25D366] animate-ping opacity-25"
          style={{ animationDuration: "3s" }}
        ></span>

        {/* Subtle inner expansion ring on hover */}
        <span className="absolute inset-0 rounded-full border border-white/30 scale-100 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></span>
      </a>
    </div>
  );
}
