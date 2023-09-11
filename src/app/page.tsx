"use client";

import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center gap-16 p-24">
      <h1 className="text-3xl font-bold">Bun Test</h1>

      <div className="flex flex-col gap-4 items-center">
        <p className="text-3xl">{counter}</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            className="p-2 text-xl border border-black rounded-sm"
            onClick={() => setCounter((c) => c - 1)}
          >
            -
          </button>
          <button
            className="p-2 text-xl border border-black rounded-sm"
            onClick={() => setCounter((c) => c + 1)}
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}
