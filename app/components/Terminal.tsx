"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { Terminal as TerminalIcon, X, Minimize2 } from "lucide-react";

interface TerminalLine {
  type: "input" | "output" | "error";
  content: string;
  delay?: number;
}

const commands: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  whoami     - About me",
    "  skills     - View technical expertise",
    "  projects   - Featured projects",
    "  contact    - Contact information",
    "  cv         - Download CV",
    "  funfact    - Random fun facts",
    "  clear      - Clear terminal",
    "  exit       - Close terminal",
  ],
  whoami: [
    "┌─────────────────────────────────────┐",
    "│  Dennis Ooki Magolo                 │",
    "│  Software Development Lead          │",
    "│  Uniconnect Centre                  │",
    "│                                     │",
    "│  'I believe software should feel    │",
    "│   crafted, not manufactured.'       │",
    "└─────────────────────────────────────┘",
  ],
  skills: [
    "┌──────── Technical Expertise ────────┐",
    "│                                     │",
    "│  Python      ████████████████░░  85%│",
    "│  Django      ████████████████████ 95%│",
    "│  Flutter     ████████████████░░░░ 85%│",
    "│  React       ████████████████░░░░ 80%│",
    "│  MongoDB     ██████████████░░░░░░ 75%│",
    "│                                     │",
    "└─────────────────────────────────────┘",
  ],
  projects: [
    "┌────────── Featured Projects ────────┐",
    "│                                     │",
    "│  1. Personal Finance Tracker        │",
    "│     -> React + Django + MongoDB     │",
    "│                                     │",
    "│  2. Kula Kount                      │",
    "│     -> Flutter + Supabase           │",
    "│                                     │",
    "│  Type 'open <number>' for details   │",
    "└─────────────────────────────────────┘",
  ],
  contact: [
    "┌────────── Contact Details ──────────┐",
    "│                                     │",
    "│  Email:   dennisooki@icloud.com     │",
    "│  GitHub:  github.com/dennisooki     │",
    "│                                     │",
    "└─────────────────────────────────────┘",
  ],
  cv: [
    "┌─────────── Download CV ─────────────┐",
    "│                                     │",
    "│  Opening CV for download...         │",
    "│                                     │",
    "│  Tip: Use 'Save as PDF' in print    │",
    "│  dialog for best results.           │",
    "│                                     │",
    "└─────────────────────────────────────┘",
  ],
};

const funFacts: string[][] = [
  [
    "",
    "  [ Fun Fact #1 ]",
    "",
    "  Arsenal is a small club with 0 major trophies",
    "  ever since I was born. Coincidence? I think not.",
    "",
  ],
  [
    "",
    "  [ Fun Fact #2 ]",
    "",
    "  The first time I 'coded' was theoretically as a",
    "  6-year-old toddler - editing GTA San Andreas mod",
    "  scripts on Windows XP with Notepad... on a dial-up",
    "  modem.",
    "",
  ],
  [
    "",
    "  [ Fun Fact #3 ]",
    "",
    "  I run on approximately 4 cups of coffee per",
    "  debugging session. Sleep is just a dependency I",
    "  haven't installed yet.",
    "",
  ],
];

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: "Welcome to Dennis Terminal v1.0.0" },
    { type: "output", content: "Type 'help' for available commands." },
    { type: "output", content: "" },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const addLines = (newLines: TerminalLine[]) => {
    setLines((prev) => [...prev, ...newLines]);
  };

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    addLines([{ type: "input", content: `$ ${cmd}` }]);

    if (trimmedCmd === "clear") {
      setLines([]);
      return;
    }

    if (trimmedCmd === "exit" || trimmedCmd === "quit") {
      setTimeout(() => setIsOpen(false), 300);
      addLines([{ type: "output", content: "Goodbye! 👋" }]);
      return;
    }

    if (trimmedCmd === "open 1") {
      addLines([
        { type: "output", content: "" },
        { type: "output", content: "Personal Finance Tracker" },
        { type: "output", content: "─────────────────────────" },
        { type: "output", content: "A full-stack financial management app" },
        { type: "output", content: "built with React, Django & MongoDB." },
        { type: "output", content: "" },
        { type: "output", content: "Features:" },
        { type: "output", content: "  • Expense tracking & budgeting" },
        { type: "output", content: "  • Financial analytics dashboard" },
        { type: "output", content: "  • Secure authentication" },
        { type: "output", content: "" },
      ]);
      return;
    }

    if (trimmedCmd === "open 2") {
      addLines([
        { type: "output", content: "" },
        { type: "output", content: "Kula Kount" },
        { type: "output", content: "───────────" },
        { type: "output", content: "A privacy-focused calorie tracker" },
        { type: "output", content: "built with Flutter & Supabase." },
        { type: "output", content: "" },
        { type: "output", content: "Features:" },
        { type: "output", content: "  • Barcode scanning" },
        { type: "output", content: "  • Offline-first design" },
        { type: "output", content: "  • GDPR compliant" },
        { type: "output", content: "" },
      ]);
      return;
    }

    if (trimmedCmd === "cv") {
      setTimeout(() => {
        addLines(commands.cv.map((line) => ({ type: "output" as const, content: line })));
        addLines([{ type: "output", content: "" }]);
        setTimeout(() => {
          const cvWindow = window.open("/Dennis Ooki CV.html", "_blank");
          if (cvWindow) {
            setTimeout(() => {
              cvWindow.print();
            }, 500);
          }
        }, 500);
      }, 100);
      return;
    }

    if (trimmedCmd === "funfact") {
      const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
      setTimeout(() => {
        addLines(randomFact.map((line) => ({ type: "output" as const, content: line })));
      }, 100);
      return;
    }

    const response = commands[trimmedCmd];
    if (response) {
      setTimeout(() => {
        addLines(response.map((line) => ({ type: "output" as const, content: line })));
        addLines([{ type: "output", content: "" }]);
      }, 100);
    } else if (trimmedCmd) {
      addLines([
        { type: "error", content: `Command not found: ${cmd}` },
        { type: "output", content: "Type 'help' for available commands." },
        { type: "output", content: "" },
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      setCommandHistory((prev) => [...prev, currentInput]);
      setHistoryIndex(-1);
      processCommand(currentInput);
    }
    setCurrentInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex] || "");
      } else {
        setHistoryIndex(-1);
        setCurrentInput("");
      }
    }
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-surface border border-border rounded-full shadow-lg hover:border-accent hover:shadow-accent/20 hover:shadow-xl transition-all group"
        aria-label="Open terminal"
      >
        <TerminalIcon className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
        <span className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full animate-pulse" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: isMinimized ? 0.3 : 1, 
              y: 0,
              x: isMinimized ? "calc(100% - 180px)" : 0,
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className={`fixed z-50 bg-background border border-border rounded-xl overflow-hidden shadow-2xl ${
              isMinimized 
                ? "bottom-6 right-6 w-64 h-12" 
                : "bottom-6 right-6 w-[90vw] md:w-[600px] h-[400px] md:h-[450px]"
            }`}
          >
            <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border">
              <div className="flex items-center gap-2">
                <TerminalIcon className="w-4 h-4 text-accent" />
                <span className="font-mono text-sm text-foreground">dennis@portfolio</span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 hover:bg-surface rounded transition-colors"
                  aria-label={isMinimized ? "Expand" : "Minimize"}
                >
                  <Minimize2 className="w-3.5 h-3.5 text-muted" />
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsMinimized(false);
                  }}
                  className="p-1.5 hover:bg-red-500/20 rounded transition-colors"
                  aria-label="Close"
                >
                  <X className="w-3.5 h-3.5 text-muted hover:text-red-500" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <div
                ref={terminalRef}
                className="h-[calc(100%-44px)] overflow-y-auto p-4 font-mono text-sm"
                onClick={() => inputRef.current?.focus()}
              >
                {lines.map((line, index) => (
                  <div
                    key={index}
                    className={`whitespace-pre-wrap ${
                      line.type === "input"
                        ? "text-accent"
                        : line.type === "error"
                        ? "text-red-400"
                        : "text-foreground"
                    }`}
                  >
                    {line.content}
                  </div>
                ))}

                <form onSubmit={handleSubmit} className="flex items-center">
                  <span className="text-accent mr-2">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none text-foreground caret-accent"
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <span className="w-2 h-5 bg-accent animate-blink" />
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
