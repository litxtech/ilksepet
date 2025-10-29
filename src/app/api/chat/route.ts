import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const reply = `Hello! You said: ${message}. How can İlksepet help you today?`;
      for (const chunk of reply.match(/.{1,20}/g) || []) {
        controller.enqueue(encoder.encode(chunk));
        await new Promise((r) => setTimeout(r, 30));
      }
      controller.close();
    },
  });
  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}


