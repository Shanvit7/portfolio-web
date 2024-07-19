import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { GibberishTextProps } from "@/lib/types";


const Letter = ({ letter, className }: { letter: string; className?: string }) => {
  const [code, setCode] = useState(letter.toUpperCase().charCodeAt(0));

  useEffect(() => {
    let count = Math.floor(Math.random() * 10) + 5;
    const interval = setInterval(() => {
      setCode(() => Math.floor(Math.random() * 26) + 65);
      count--;
      if (count === 0) {
        setCode(letter.toUpperCase().charCodeAt(0));
        clearInterval(interval);
      }
    }, 24);

    return () => clearInterval(interval);
  }, [letter]);

  return (
    <span className={cn("whitespace-pre text-foreground", className)}>
      {String.fromCharCode(code)}
    </span>
  );
};

const GibberishText = ({ text, className }: GibberishTextProps) => {
  return (
    <>
      {text.split("").map((letter, index) => {
        return <Letter className={className} letter={letter} key={`${index}-${letter}`} />;
      })}
    </>
  );
};

export default GibberishText;
