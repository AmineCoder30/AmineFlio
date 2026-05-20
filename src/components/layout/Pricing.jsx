import { useState } from "react";
import { Check, Smartphone, Globe } from "lucide-react";

import Title from "../ui/Title";
import pricing from "../../constants/pricing";

export default function Pricing() {
  const [activeType, setActiveType] = useState("website");

  const plans = pricing.plans[activeType];

  const handleWhatsApp = (plan) => {
    const message = `السلام، مهتم بـ Plan ${plan.name} من الموقع ديالك. بغيت نعرف التفاصيل والثمن.`;

    const url = `https://wa.me/212651167495?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="pricing" className="py-20 ">
      <div className="relative mx-auto max-w-7xl  z-10">
        <div>
          <Title partOne={"Clear Pricing"} PartTwo={"No Hidden Costs"} />
        </div>

        <div className="mx-auto mb-12 flex w-full max-w-md items-center rounded-full border border-border bg-card-bg p-1 shadow-sm mt-16">
          <button
            type="button"
            onClick={() => setActiveType("website")}
            className={`flex w-1/2 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
              activeType === "website"
                ? "bg-accent text-white shadow-md"
                : "text-text-secondary hover:bg-background"
            }`}
          >
            <Globe size={16} strokeWidth={2.2} />
            {pricing.switcher.website}
          </button>
          <button
            type="button"
            onClick={() => setActiveType("mobile")}
            className={`flex w-1/2 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
              activeType === "mobile"
                ? "bg-accent text-white shadow-md"
                : "text-text-secondary hover:bg-background"
            }`}
          >
            <Smartphone size={16} strokeWidth={2.2} />
            {pricing.switcher.mobile}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => {
            const isFeatured = index === 1;

            return (
              <article
                key={plan.name}
                className={`group relative rounded-3xl border p-7 md:p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col mt-4 ${
                  isFeatured
                    ? "bg-card-bg border-accent shadow-soft-hover z-10"
                    : "bg-card-bg border-border shadow-sm hover:shadow-xl hover:shadow-accent/10 hover:border-accent/50 z-0"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-0 right-0 flex justify-center z-20">
                    <span
                      className={`inline-flex rounded-full px-4 py-1.5 text-xs font-bold tracking-wide whitespace-nowrap ${
                        isFeatured
                          ? "bg-gradient-to-r from-accent to-accent-hover text-white shadow-glow"
                          : "bg-accent/10 text-accent bg-card-bg border border-accent/20"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2 text-text">
                  {plan.name}
                </h3>
                <p className="text-sm mb-6 leading-relaxed min-h-[3rem] text-text-secondary">
                  {plan.description}
                </p>

                <div className="mb-7 flex items-end gap-1">
                  <span className="text-4xl font-bold text-text">
                    {plan.price}
                  </span>
                  <span className="pb-1 text-sm font-medium text-text-secondary">
                    {plan.period}
                  </span>
                </div>

                <ul className="mb-8 space-y-4 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          isFeatured
                            ? "bg-accent/20 text-accent ring-1 ring-accent/30"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        <Check size={13} strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-text">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full justify-center rounded-md py-3 font-semibold transition-colors ${
                    isFeatured
                      ? "bg-gradient-to-r from-accent to-accent-hover text-white hover:opacity-90"
                      : "border border-border text-text hover:border-accent hover:text-accent"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleWhatsApp(plan);
                  }}
                >
                  {plan.cta}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
