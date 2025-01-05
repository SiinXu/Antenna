import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export default function TypewriterEffectSmooth({ words, className }) {
  const [scope, animate] = useAnimate();
  let wordsArray = words?.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  }) || [];

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="text-left">
        <div className="mt-4">
          <div className="text-2xl font-medium text-left text-zinc-500 dark:text-zinc-400">
            {wordsArray.map((word, idx) => {
              return (
                <div key={`word-${idx}`} className="inline-block">
                  {word.text.map((char, index) => (
                    <motion.span
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      key={`char-${index}`}
                      className={word.className}
                    >
                      {char}
                    </motion.span>
                  ))}
                  &nbsp;
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  };
  return <>{renderWords()}</>;
}
