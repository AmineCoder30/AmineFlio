import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { defaultLanguage, supportedLanguages } from "../../i18n";
import PropTypes from "prop-types";
const LANGUAGE_META = {
  en: { label: "English", short: "EN" },
  fr: { label: "Français", short: "FR" },
  ar: { label: "العربية", short: "AR" },
};

const getMeta = (language) =>
  LANGUAGE_META[language] || { label: language, short: language.toUpperCase() };

function GlobeIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z" />
    </svg>
  );
}

function ChevronIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const uid = useId();
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const listRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const current = supportedLanguages.includes(i18n.language)
    ? i18n.language
    : defaultLanguage;
  const currentIndex = Math.max(supportedLanguages.indexOf(current), 0);
  const currentMeta = getMeta(current);

  const changeLanguage = (language) => {
    const hash = window.location.hash;
    const path = window.location.pathname.replace(/^\/(en|fr|ar)(?=\/|$)/, "");
    window.location.assign(`/${language}${path || ""}${hash}`);
  };

  const openMenu = () => {
    setActiveIndex(currentIndex);
    setOpen(true);
  };

  const closeMenu = (returnFocus = true) => {
    setOpen(false);
    if (returnFocus) buttonRef.current?.focus();
  };

  const selectLanguage = (language) => {
    closeMenu();
    if (language !== current) changeLanguage(language);
  };

  // Move focus into the list when it opens (keyboard + screen reader support)
  useEffect(() => {
    if (open) listRef.current?.focus();
  }, [open]);

  // Close on outside click / touch
  useEffect(() => {
    if (!open) return undefined;
    const handlePointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  const handleKeyDown = (event) => {
    const last = supportedLanguages.length - 1;

    if (!open) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        openMenu();
      }
      return;
    }

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((i) => (i >= last ? 0 : i + 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((i) => (i <= 0 ? last : i - 1));
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(last);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        selectLanguage(supportedLanguages[activeIndex]);
        break;
      case "Escape":
        event.preventDefault();
        closeMenu();
        break;
      case "Tab":
        closeMenu(false);
        break;
      default:
        break;
    }
  };

  const optionId = (language) => `${uid}-option-${language}`;
  const listId = `${uid}-listbox`;

  return (
    <div
      ref={rootRef}
      className="relative inline-block text-text"
      onKeyDown={handleKeyDown}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={() => (open ? closeMenu(false) : openMenu())}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${t("header.language")}: ${currentMeta.label}`}
        title={t("header.language")}
        className={`group   inline-flex h-10 items-center gap-2 rounded-lg border bg-card-hover ps-3 pe-2.5 text-xs font-semibold uppercase tracking-wide outline-none transition-all duration-200 hover:border-accent focus-visible:ring-2 focus-visible:ring-accent/60 ${
          open ? "border-accent" : "border-border"
        }`}
      >
        <GlobeIcon className="text-accent transition-transform duration-300 group-hover:rotate-12" />
        <span>{currentMeta.short}</span>
        <ChevronIcon
          className={`opacity-70 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute end-0 top-full z-50 mt-2 w-44 origin-top-right rtl:origin-top-left transition-all duration-150 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-1 scale-95 opacity-0"
        }`}
      >
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          tabIndex={-1}
          aria-label={t("header.language")}
          aria-activedescendant={
            open ? optionId(supportedLanguages[activeIndex]) : undefined
          }
          className="overflow-hidden rounded-xl border border-border bg-card p-1 shadow-xl shadow-black/20 outline-none backdrop-blur"
        >
          {supportedLanguages.map((language, index) => {
            const meta = getMeta(language);
            const selected = language === current;
            const active = index === activeIndex;

            return (
              <li
                key={language}
                id={optionId(language)}
                role="option"
                aria-selected={selected}
                lang={language}
                dir={language === "ar" ? "rtl" : "ltr"}
                onClick={() => selectLanguage(language)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  active ? "bg-card-hover" : ""
                } ${selected ? "font-semibold text-accent" : ""}`}
              >
                <span className="flex items-center gap-3">
                  <span className="w-6 text-[11px] font-bold uppercase tracking-wider opacity-60">
                    {meta.short}
                  </span>
                  <span>{meta.label}</span>
                </span>
                {selected && <CheckIcon />}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
CheckIcon.propTypes = {
  className: PropTypes.string.isRequired,
};
GlobeIcon.propTypes = {
  className: PropTypes.string.isRequired,
};
ChevronIcon.propTypes = {
  className: PropTypes.string.isRequired,
};
