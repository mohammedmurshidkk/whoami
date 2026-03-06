"use client";

import { useEffect, useState } from "react";
import type { CommandOutput } from "@/lib/commands";

interface TerminalOutputProps {
  command: string;
  output: CommandOutput;
  prompt: string;
  onFinishTyping?: () => void;
}

const TerminalOutput = ({ command, output, prompt, onFinishTyping }: TerminalOutputProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Type out the output text character by character
    const fullText = output.text;
    let i = 0;
    const speed = Math.max(2, Math.min(10, 500 / fullText.length)); // adaptive speed

    const interval = setInterval(() => {
      i += 3; // type 3 chars at a time for speed
      if (i >= fullText.length) {
        setDisplayedText(fullText);
        setDone(true);
        clearInterval(interval);
        onFinishTyping?.();
      } else {
        setDisplayedText(fullText.slice(0, i));
      }
    }, speed);

    return () => clearInterval(interval);
  }, [output.text, onFinishTyping]);

  return (
    <div className="mb-2">
      {/* The command line */}
      <div className="flex gap-2 items-center flex-wrap">
        <span className="terminal-prompt whitespace-nowrap">{prompt}</span>
        <span className="terminal-text">{command}</span>
        <span className="terminal-timestamp text-xs opacity-40 ml-auto">[{output.timestamp}]</span>
      </div>
      {/* The output */}
      <div
        className={`terminal-output mt-1 whitespace-pre-wrap break-words ${output.isError ? "terminal-error" : ""}`}
      >
        {output.isHtml ? (
          <span dangerouslySetInnerHTML={{ __html: done ? output.text : displayedText }} />
        ) : (
          <span>{done ? output.text : displayedText}</span>
        )}
      </div>
    </div>
  );
};

export default TerminalOutput;
