import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Title } from "../ui";
import faq from "../../constants/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 ">
      <div className="relative mx-auto max-w-5xl ">
        <div>
          <Title partOne={"Questions"} PartTwo={"& Answers"} />
        </div>

        <div className="mx-auto max-w-3xl space-y-4 relative z-10 mt-16">
          {faq.items.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border bg-card-bg overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-accent shadow-soft ring-1 ring-accent/10"
                  : "border-border shadow-sm hover:shadow-md hover:border-accent/50"
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer focus-visible:outline-none focus-visible:bg-hover"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      openIndex === index
                        ? "bg-gradient-to-r from-accent to-accent-hover text-white shadow-md shadow-accent/20"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <MessageCircle size={18} strokeWidth={2} />
                  </span>
                  <span className="text-[1.05rem] font-semibold text-text pr-4">
                    {item.question}
                  </span>
                </div>
                <ChevronDown
                  size={20}
                  strokeWidth={2}
                  className={`text-text-secondary shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-accent" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-0 ps-[4.5rem]">
                    <p className="text-[0.95rem] text-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
