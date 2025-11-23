import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';

const BotMessage = ({ text, scrollRef }) => {
  // Only use typewriter if the text looks like HTML (starts with <)
  // Otherwise just show it (or we could use it for everything, but let's stick to the HTML response)
  const isHtml = text.trim().startsWith('<');
  const { displayedText } = useTypewriter(isHtml ? text : '', 5, scrollRef);

  if (!isHtml) {
    return <div>{text}</div>;
  }

  return (
    <div 
      className="
        /* Spacing between blocks */
        [&>div]:space-y-4

        /* Headings */
        [&>div>h2]:text-lg
        [&>div>h2]:font-semibold
        [&>div>h2]:text-primary
        [&>div>h2]:tracking-wide
        [&>div>h2]:mt-6
        [&>div>h2:first-child]:mt-0

        /* Paragraphs */
        [&>div>p]:text-sm
        [&>div>p]:text-muted-foreground
        [&>div>p]:leading-relaxed

        /* Lists */
        [&>div>ul]:list-disc
        [&>div>ul]:pl-5
        [&>div>ul]:space-y-1
        [&>div>ul]:text-sm
        [&>div>ul]:text-muted-foreground

        /* List items */
        [&>div>ul>li]:leading-relaxed

        /* Strong (highlight) */
        [&>div>strong]:font-semibold
        [&>div>strong]:text-foreground
      "
      dangerouslySetInnerHTML={{ __html: displayedText }} 
    />
  );
};

export default BotMessage;
