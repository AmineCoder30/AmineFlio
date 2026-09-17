import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';

const BotMessage = ({ text, scrollRef, isNew = false, onAnimationComplete }) => {
  const isHtml = text.trim().startsWith('<');
  const { displayedText, isComplete } = useTypewriter(isHtml ? text : '', 5, scrollRef, isNew);

  React.useEffect(() => {
    if (isComplete && onAnimationComplete) {
      onAnimationComplete();
    }
  }, [isComplete, onAnimationComplete]);

  if (!isHtml) {
    return <div className="text-sm leading-relaxed">{text}</div>;
  }

  return (
    <div 
      className="
        bot-message-content

        /* Spacing between blocks */
        [&>div]:space-y-3

        /* Headings */
        [&>div>h2]:text-base
        [&>div>h2]:font-semibold
        [&>div>h2]:text-text
        [&>div>h2]:tracking-tight
        [&>div>h2]:mt-4
        [&>div>h2]:mb-1.5
        [&>div>h2:first-child]:mt-0

        /* Paragraphs */
        [&>div>p]:text-[13px]
        [&>div>p]:text-text-secondary
        [&>div>p]:leading-relaxed

        /* Lists */
        [&>div>ul]:list-none
        [&>div>ul]:pl-0
        [&>div>ul]:space-y-1.5
        [&>div>ul]:text-[13px]
        [&>div>ul]:text-text-secondary

        /* List items with custom bullet */
        [&>div>ul>li]:leading-relaxed
        [&>div>ul>li]:pl-4
        [&>div>ul>li]:relative
        [&>div>ul>li]:before:content-['▸']
        [&>div>ul>li]:before:absolute
        [&>div>ul>li]:before:left-0
        [&>div>ul>li]:before:text-primary
        [&>div>ul>li]:before:font-bold
        [&>div>ul>li]:before:text-xs

        /* Strong (highlight) */
        [&>div>strong]:font-semibold
        [&>div>strong]:text-text
      "
      dangerouslySetInnerHTML={{ __html: displayedText }} 
    />
  );
};

export default BotMessage;
