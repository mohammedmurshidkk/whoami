"use client";

import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { COMMAND_LIST } from "@/lib/commands";

interface TerminalInputProps {
  prompt: string;
  onSubmit: (command: string) => void;
  disabled?: boolean;
}

const TerminalInput = ({ prompt, onSubmit, disabled }: TerminalInputProps) => {
  const [value, setValue] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestion, setSuggestion] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [disabled]);

  // Click anywhere to focus
  useEffect(() => {
    const handler = () => inputRef.current?.focus();
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      onSubmit(value.trim());
      setHistory((h) => [...h, value.trim()]);
      setHistoryIndex(-1);
      setValue("");
      setSuggestion("");
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      if (history[newIndex]) {
        setHistoryIndex(newIndex);
        setValue(history[newIndex]);
        setSuggestion("");
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= history.length) {
        setHistoryIndex(-1);
        setValue("");
      } else {
        setHistoryIndex(newIndex);
        setValue(history[newIndex]);
      }
      setSuggestion("");
      return;
    }

    if (e.key === "Tab") {
      e.preventDefault();
      if (suggestion) {
        setValue(suggestion);
        setSuggestion("");
      }
      return;
    }
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setHistoryIndex(-1);

    if (newValue.trim()) {
      const match = COMMAND_LIST.find((c) => c.startsWith(newValue.toLowerCase()) && c !== newValue.toLowerCase());
      setSuggestion(match || "");
    } else {
      setSuggestion("");
    }
  };

  return (
    <div className="flex gap-2 items-center group flex-wrap">
      <span className="terminal-prompt whitespace-nowrap">{prompt}</span>
      <div className="relative flex-1 min-w-0">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className="terminal-input w-full bg-transparent border-none outline-none caret-transparent"
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
        />
        {/* Render visible text + cursor + suggestion */}
        <div className="absolute inset-0 pointer-events-none flex items-center overflow-hidden">
          <span className="terminal-text">{value}</span>
          <span className="terminal-cursor" />
          {suggestion && (
            <span className="terminal-suggestion opacity-30">
              {suggestion.slice(value.length)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalInput;
