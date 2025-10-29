"use client";

import React from "react";

export default function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = React.useState("");

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, content: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    const res = await fetch("/api/chat", { method: "POST", body: JSON.stringify({ message: userMsg.content }), headers: { "Content-Type": "application/json" } });
    const reader = res.body?.getReader();
    const decoder = new TextDecoder();
    let assistantText = "";
    setMessages((m) => [...m, { role: "assistant", content: "" }]);
    if (!reader) return;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      assistantText += decoder.decode(value);
      setMessages((m) => {
        const copy = [...m];
        const lastIdx = copy.length - 1;
        copy[lastIdx] = { role: "assistant", content: assistantText };
        return copy;
      });
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        Chat
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/30 flex items-end md:items-center justify-center z-50" onClick={() => setOpen(false)}>
          <div className="bg-white w-full max-w-md m-4 rounded-lg shadow-xl flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="px-4 py-3 border-b flex justify-between items-center">
              <h3 className="font-semibold">İlksepet Chat</h3>
              <button onClick={() => setOpen(false)} className="text-gray-500">✕</button>
            </div>
            <div className="p-4 h-80 overflow-y-auto space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                  <div className={`inline-block px-3 py-2 rounded-lg ${m.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"}`}>
                    {m.content || ""}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={sendMessage} className="p-3 border-t flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message" className="flex-1 border rounded-lg px-3 py-2" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}


