"use client";

import React, { useState } from "react";

const ChatPage = () => {
  const [input, setInput] = useState("");
  const [nickname, setNickname] = useState("Guest");
  const [messages, setMessages] = useState<{ id: number; nickname: string; text: string }[]>([]);

  const send = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), nickname: nickname || "Guest", text: input.trim() }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen max-w-[50%] mx-auto bg-white">

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
        {messages.map((msg) => (
          <div key={msg.id} className="flex justify-start">
            <span className="text-sm text-gray-800">
              <span className="font-medium">{msg.nickname}: </span>
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="px-6 py-4 flex gap-3">

        {/* Nickname */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-gray-400">Nickname</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-28 border border-gray-200 rounded-xl px-3 py-3 text-sm outline-none focus:border-gray-400 transition-colors"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-xs text-gray-400 opacity-0">Message</label>
          <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-gray-400 transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Message"
              className="flex-1 text-sm outline-none placeholder-gray-400"
            />
            <button
              onClick={send}
              className={`text-sm font-medium transition-colors ${
                input.trim() ? "text-gray-900" : "text-gray-300"
              }`}
            >
              Send
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChatPage;