import { useEffect, useMemo, useState } from "react";
import { Bot, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const COMMANDS = {
  "/help":
    "Available commands: /experience, /tech-stack, /projects, /contact, /resume, /cost, /clear",
  "/experience":
    "4+ years building scalable full-stack products. Senior Software Engineer at HCLTech, with strong ownership in performance optimization, reusable systems, and delivery.",
  "/tech-stack":
    "Core stack: React, Next.js, TypeScript, Node.js, Express, REST APIs, PostgreSQL, MongoDB, AWS, and Agentic AI workflows.",
  "/projects":
    "Highlighted projects: Employee Management System, Spendledger Backend, Password Shield Web App, Auth NextJS App, E-Commerce Web App.",
  "/contact":
    "Email: himanshunishadofficial@gmail.com | LinkedIn: https://www.linkedin.com/in/hmnsd/",
  "/resume": "Download resume: /Himanshu-Nishad-Resume.pdf",
  "/cost":
    "This sandbox is free mode. No paid AI calls are made. Slash commands are resolved locally in the browser.",
};

const MAX_INPUT_LENGTH = 80;
const COOLDOWN_MS = 1200;
const MAX_REQUESTS_PER_SESSION = 40;

function formatTime(ms) {
  return Math.ceil(ms / 1000);
}

export default function AgentSandbox() {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [lastRunAt, setLastRunAt] = useState(0);
  const [sessionCount, setSessionCount] = useState(0);
  const [alert, setAlert] = useState("");
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);
  const [history, setHistory] = useState([
    {
      role: "agent",
      text: "Welcome to the Interactive Agent Sandbox. Try /help to explore.",
    },
  ]);

  const supportedCommands = useMemo(() => Object.keys(COMMANDS).join(" "), []);
  const quickCommands = ["/help", "/experience", "/tech-stack", "/projects"];

  useEffect(() => {
    const footerEl = document.querySelector("footer");
    if (!footerEl) return;

    const updateFooterHeight = () => {
      setFooterHeight(footerEl.getBoundingClientRect().height);
    };

    updateFooterHeight();
    window.addEventListener("resize", updateFooterHeight);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.01 }
    );

    observer.observe(footerEl);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateFooterHeight);
    };
  }, []);

  useEffect(() => {
    const openFromHeader = () => setIsOpen(true);
    window.addEventListener("open-agent-sandbox", openFromHeader);
    return () => window.removeEventListener("open-agent-sandbox", openFromHeader);
  }, []);

  const pushAlert = (message) => {
    setAlert(message);
    window.setTimeout(() => setAlert(""), 2600);
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      pushAlert("Copied response to clipboard.");
    } catch {
      pushAlert("Copy failed. Clipboard access was blocked.");
    }
  };

  const onRun = () => {
    const trimmed = input.trim();

    if (!trimmed) {
      pushAlert("Input is empty. Try /help.");
      return;
    }

    if (trimmed.length > MAX_INPUT_LENGTH) {
      pushAlert(`Input too long. Limit is ${MAX_INPUT_LENGTH} characters.`);
      return;
    }

    const now = Date.now();
    const msSinceLast = now - lastRunAt;
    if (msSinceLast < COOLDOWN_MS) {
      pushAlert(
        `Rate limit active. Retry in ${formatTime(COOLDOWN_MS - msSinceLast)}s.`
      );
      return;
    }

    if (sessionCount >= MAX_REQUESTS_PER_SESSION) {
      pushAlert("Session limit reached. Refresh to start a new free session.");
      return;
    }

    setLastRunAt(now);
    setSessionCount((prev) => prev + 1);
    setHistory((prev) => [...prev, { role: "user", text: trimmed }]);

    if (!trimmed.startsWith("/")) {
      setHistory((prev) => [
        ...prev,
        {
          role: "agent",
          text: "Free mode only supports slash commands. Try /help.",
        },
      ]);
      pushAlert("Blocked: plain text is disabled to keep costs at zero.");
      setInput("");
      return;
    }

    if (trimmed === "/clear") {
      setHistory([
        {
          role: "agent",
          text: "History cleared. Free mode is active. Try /help.",
        },
      ]);
      setInput("");
      return;
    }

    const reply = COMMANDS[trimmed];
    if (!reply) {
      setHistory((prev) => [
        ...prev,
        {
          role: "agent",
          text: `Unknown command. Supported: ${supportedCommands}`,
        },
      ]);
      pushAlert("Unknown command.");
      setInput("");
      return;
    }

    setHistory((prev) => [...prev, { role: "agent", text: reply }]);
    setInput("");
  };

  return (
    <div
      className="fixed right-4 z-50"
      style={{ bottom: isFooterVisible ? footerHeight + 16 : 40 }}
    >
      {isOpen && (
        <div
          className="mb-3 w-[calc(100vw-2rem)] sm:w-[24rem] md:w-[28rem] rounded-xl border p-3 sm:p-4 shadow-2xl"
          style={{
            background: isDark ? "rgba(19,19,19,0.96)" : "rgba(255,255,255,0.97)",
            borderColor: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2
              className="text-base sm:text-lg font-semibold"
              style={{ color: isDark ? "#67acfa" : "#1e40af" }}
            >
              Interactive Agent Sandbox
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1.5"
              style={{
                background: isDark ? "rgba(255,255,255,0.12)" : "rgba(17,24,39,0.08)",
              }}
              aria-label="Close agent chat"
            >
              <X size={16} style={{ color: isDark ? "#f3f4f6" : "#111827" }} />
            </button>
          </div>

          <p className="mb-4 text-xs sm:text-sm" style={{ color: isDark ? "#d1d5db" : "#4b5563" }}>
            Free mode enabled: slash commands only, no external AI/API calls.
          </p>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => setInput(cmd)}
                className="text-xs sm:text-sm rounded-full px-3 py-1.5"
                style={{
                  background: isDark ? "rgba(255,255,255,0.1)" : "rgba(17,24,39,0.08)",
                  color: isDark ? "#e5e7eb" : "#111827",
                }}
              >
                {cmd}
              </button>
            ))}
          </div>

          <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs sm:text-sm">
            <span style={{ color: isDark ? "#d1d5db" : "#4b5563" }}>
              Requests: {sessionCount}/{MAX_REQUESTS_PER_SESSION}
            </span>
            <span style={{ color: isDark ? "#9ca3af" : "#6b7280" }}>
              Max input: {MAX_INPUT_LENGTH} chars
            </span>
          </div>

          <div
            className="h-72 sm:h-80 overflow-y-auto rounded-lg p-3 mb-4"
            style={{
              background: isDark ? "rgba(0,0,0,0.5)" : "rgba(17,24,39,0.06)",
              border: `1px solid ${
                isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
              }`,
            }}
          >
            {history.map((msg, idx) => (
              <div key={`${msg.role}-${idx}`} className={`mb-3 flex ${msg.role === "agent" ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-[90%] sm:max-w-[82%] ${msg.role === "agent" ? "items-start" : "items-end"} flex flex-col gap-1`}>
                  <div
                    className="rounded-2xl px-3 py-2 break-words"
                    style={{
                      background:
                        msg.role === "agent"
                          ? isDark
                            ? "rgba(245,158,11,0.16)"
                            : "rgba(254,243,199,0.95)"
                          : isDark
                          ? "rgba(59,130,246,0.22)"
                          : "rgba(219,234,254,0.95)",
                      border: `1px solid ${
                        msg.role === "agent"
                          ? isDark
                            ? "rgba(245,158,11,0.35)"
                            : "rgba(245,158,11,0.45)"
                          : isDark
                          ? "rgba(147,197,253,0.35)"
                          : "rgba(59,130,246,0.35)"
                      }`,
                    }}
                  >
                    <span
                      className="font-semibold"
                      style={{
                        color:
                          msg.role === "agent"
                            ? "#f59e0b"
                            : isDark
                            ? "#93c5fd"
                            : "#1d4ed8",
                      }}
                    >
                      {msg.role === "agent" ? "agent" : "you"}:
                    </span>{" "}
                    <span style={{ color: isDark ? "#f3f4f6" : "#111827" }}>
                      {msg.text}
                    </span>
                  </div>
                  {msg.role === "agent" && (
                    <button
                      onClick={() => copyText(msg.text)}
                      className="text-xs rounded-md px-2 py-1 shrink-0"
                      style={{
                        background: isDark
                          ? "rgba(255,255,255,0.14)"
                          : "rgba(17,24,39,0.08)",
                        color: isDark ? "#f9fafb" : "#111827",
                      }}
                    >
                      Copy
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {alert && (
            <div
              className="mb-3 rounded-lg px-3 py-2 text-sm"
              style={{
                background: isDark ? "rgba(220,38,38,0.22)" : "rgba(254,226,226,0.9)",
                color: isDark ? "#fecaca" : "#991b1b",
              }}
            >
              {alert}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onRun()}
              placeholder="Try /experience"
              className="w-full rounded-lg px-3 py-2.5 outline-none text-sm sm:text-base"
              maxLength={MAX_INPUT_LENGTH + 10}
              style={{
                background: isDark ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.88)",
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.18)"
                }`,
                color: isDark ? "#fff" : "#111827",
              }}
            />
            <button
              onClick={onRun}
              className="rounded-lg px-4 py-2.5 font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 w-full sm:w-auto"
            >
              Run
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="hidden lg:flex h-14 w-14 rounded-full shadow-xl items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #f97316, #ea580c)",
          color: "#ffffff",
        }}
        aria-label="Open interactive agent sandbox"
      >
        <Bot size={24} />
      </button>
    </div>
  );
}
