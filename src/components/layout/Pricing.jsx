import { useState } from "react";
import { Check, Smartphone, Globe } from "lucide-react";

import Title from "../ui/Title";
import pricing from "../../constants/pricing";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const { t } = useTranslation();
  const [activeType, setActiveType] = useState("website");

  const plans = pricing.plans[activeType];

  const handleWhatsApp = (plan) => {
    const message = t("pricing.whatsapp", { plan: t(`data.pricing.plans.${activeType}.${plans.indexOf(plan)}.name`, { defaultValue: plan.name }) });
    const url = `https://wa.me/212651167495?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="pricing" className="py-16 md:py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        <Title partOne={t("sections.pricing.0")} PartTwo={t("sections.pricing.1")} />

        <div className="mx-auto mb-10 mt-10 flex w-full max-w-md items-center rounded-full border border-border bg-card-bg p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setActiveType("website")}
            className={`flex w-1/2 items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
              activeType === "website"
                ? "bg-accent text-white shadow-md"
                : "text-text-secondary hover:bg-background"
            }`}
          >
            <Globe size={16} strokeWidth={2.2} />
            {t("data.pricing.switcher.website", { defaultValue: pricing.switcher.website })}
          </button>

          <button
            type="button"
            onClick={() => setActiveType("mobile")}
            className={`flex w-1/2 items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors ${
              activeType === "mobile"
                ? "bg-accent text-white shadow-md"
                : "text-text-secondary hover:bg-background"
            }`}
          >
            <Smartphone size={16} strokeWidth={2.2} />
            {t("data.pricing.switcher.mobile", { defaultValue: pricing.switcher.mobile })}
          </button>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, index) => {
            const isFeatured = index === 1;

            return (
              <article
                key={plan.name}
                className={`group relative mt-3 flex flex-col rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 md:p-6 ${
                  isFeatured
                    ? "z-10 border-accent bg-card-bg shadow-soft-hover"
                    : "border-border bg-card-bg shadow-sm hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-0 right-0 z-20 flex justify-center">
                    <span
                      className={`whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold tracking-wide ${
                        isFeatured
                          ? "bg-gradient-to-r from-accent to-accent-hover text-white shadow-glow"
                          : "border border-accent/20 bg-card-bg text-accent"
                      }`}
                    >
                      {t(`data.pricing.plans.${activeType}.${index}.badge`, { defaultValue: plan.badge })}
                    </span>
                  </div>
                )}

                <h3 className="mb-1.5 text-xl font-bold text-text">
                  {t(`data.pricing.plans.${activeType}.${index}.name`, { defaultValue: plan.name })}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  {t(`data.pricing.plans.${activeType}.${index}.description`, { defaultValue: plan.description })}
                </p>

                <div className="mb-5 flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                  <span className="text-3xl font-bold tracking-tight text-text">
                    {plan.price}
                  </span>

                  {plan.period && (
                    <span className="text-xs font-medium text-text-secondary">
                      {plan.period && t("pricing.project")}
                    </span>
                  )}
                </div>

                <div className="mb-3 border-t border-border" />

                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  {t("sections.labels.included")}
                </p>

                <ul className="mb-6 flex-1 space-y-2.5">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span
                        className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${
                          isFeatured
                            ? "bg-accent/15 text-accent"
                            : "bg-accent/10 text-accent"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>

                      <span className="text-sm leading-5 text-text">
                        {t(`data.pricing.plans.${activeType}.${index}.features.${featureIndex}`, { defaultValue: feature })}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`mt-auto w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                    isFeatured
                      ? "bg-gradient-to-r from-accent to-accent-hover text-white hover:opacity-90"
                      : "border border-border text-text hover:border-accent hover:text-accent"
                  }`}
                  onClick={() => handleWhatsApp(plan)}
                >
                  {t(`data.pricing.plans.${activeType}.${index}.cta`, { defaultValue: plan.cta })}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
