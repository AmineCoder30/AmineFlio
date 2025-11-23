import { useState, useEffect } from "react";

export const useTypewriter = (text, speed = 1000, scrollRef = null) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    if (!text) return;

    let currentText = "";
    const regex = /(<[^>]*>)/;
    const parts = text.split(regex).filter(Boolean);

    let partIndex = 0;
    let charIndex = 0;

    const intervalId = setInterval(() => {
      if (partIndex >= parts.length) {
        setIsComplete(true);
        clearInterval(intervalId);
        return;
      }

      const part = parts[partIndex];

      if (part.startsWith("<")) {
        let tempPartIndex = partIndex;
        while (tempPartIndex < parts.length && parts[tempPartIndex].startsWith("<")) {
          currentText += parts[tempPartIndex];
          tempPartIndex++;
        }
        setDisplayedText(currentText);
        partIndex = tempPartIndex;
        charIndex = 0;
      } else {
        if (charIndex < part.length) {
          currentText += part[charIndex];
          setDisplayedText(currentText);
          charIndex++;
        } else {
          partIndex++;
          charIndex = 0;
        }
      }

      // 🔽 Auto-scroll to bottom
      if (scrollRef?.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }

    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return { displayedText, isComplete };
};
