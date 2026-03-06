"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import MatrixRain from "./MatrixRain";
import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";
import {
  executeCommand,
  ASCII_BANNER,
  OWNER_HANDLE,
  THEMES,
  type CommandOutput,
} from "@/lib/commands";

interface HistoryEntry {
  command: string;
  output: CommandOutput;
}

const TerminalPage = () => {
  const [theme, setTheme] = useState("matrix");
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [showHint, setShowHint] = useState(true);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const themeColor = THEMES[theme]?.primary || "#bf40ff";
  const prompt = `visitor@${OWNER_HANDLE}.dev:~$`;

  const scrollToBottom = useCallback(() => {
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [entries, scrollToBottom]);

  const handleCommand = useCallback(
    (input: string) => {
      setShowHint(false);
      const trimmed = input.trim().toLowerCase();

      if (trimmed === "clear") {
        setEntries([]);
        return;
      }

      // Handle theme switch
      if (trimmed.startsWith("theme ")) {
        const themeName = trimmed.split(" ")[1];
        if (THEMES[themeName]) {
          setTheme(themeName);
        }
      }

      const output = executeCommand(input, theme);
      if (output) {
        setTyping(true);
        setEntries((prev) => [...prev, { command: input, output }]);
      }
    },
    [theme]
  );

  const handleFinishTyping = useCallback(() => {
    setTyping(false);
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background: "#0a0e27",
        color: themeColor,
        fontFamily: "'Fira Code', 'Courier New', monospace",
      }}
    >
      <MatrixRain color={themeColor} />

      <div
        className="relative z-10 min-h-screen p-4 md:p-8 max-w-4xl mx-auto"
        style={{ fontSize: "14px", lineHeight: "1.6" }}
      >
        {/* ASCII Banner */}
        <pre
          className="text-xs sm:text-sm md:text-base mb-4 overflow-x-auto"
          style={{ color: themeColor }}
        >
          {ASCII_BANNER}
        </pre>

        {/* Hint */}
        {showHint && (
          <div className="mb-4 opacity-60 animate-pulse">
            Type '<span className="font-bold">help</span>' to get started
          </div>
        )}

        {/* Command History */}
        <div>
          {entries.map((entry, i) => (
            <TerminalOutput
              key={i}
              command={entry.command}
              output={entry.output}
              prompt={prompt}
              onFinishTyping={i === entries.length - 1 ? handleFinishTyping : undefined}
            />
          ))}
        </div>

        {/* Input */}
        <TerminalInput prompt={prompt} onSubmit={handleCommand} disabled={typing} />

        <div ref={bottomRef} />
      </div>

      {/* Dynamic styles for theme */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap');

        .terminal-prompt {
          color: ${themeColor};
          font-weight: bold;
        }

        .terminal-text {
          color: ${themeColor};
        }

        .terminal-input {
          color: ${themeColor};
          font-family: 'Fira Code', 'Courier New', monospace;
          font-size: 14px;
        }

        .terminal-cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: ${themeColor};
          animation: blink 1s step-end infinite;
          vertical-align: text-bottom;
        }

        .terminal-suggestion {
          color: ${themeColor};
        }

        .terminal-output {
          color: ${themeColor}cc;
        }

        .terminal-error {
          color: #ff4444;
        }

        .terminal-timestamp {
          color: ${themeColor}66;
        }

        .cmd-highlight {
          color: ${themeColor};
          font-weight: bold;
          text-decoration: underline;
        }

        .cmd-name {
          color: ${themeColor};
          font-weight: bold;
        }

        .cmd-arg {
          color: ${themeColor}99;
          font-style: italic;
        }

        .cmd-error {
          color: #ff4444;
          font-weight: bold;
        }

        .skill-tag {
          display: inline-block;
          border: 1px solid ${themeColor}66;
          padding: 1px 8px;
          margin: 2px;
          border-radius: 3px;
          font-size: 12px;
        }

        .terminal-output a {
          color: ${themeColor};
          text-decoration: underline;
        }

        .terminal-output a:hover {
          opacity: 0.8;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Hide the real caret */
        .terminal-input::selection {
          background: ${themeColor}33;
        }

        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: ${themeColor}33;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};

export default TerminalPage;
