export default function TextBlink({ text = "Thinking...", className = "" }) {
  return (
    <span
      className={`text-sm text-text-secondary animate-pulse ${className}`}
      role="status"
      aria-live="polite"
    >
      {text}
    </span>
  );
}
