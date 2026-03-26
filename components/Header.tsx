"use client";

import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex justify-between p-4 shadow">
      <h1 className="text-xl font-bold text-blue-600">
        AI Evaluator
      </h1>

      <div className="flex gap-4">
        <button onClick={() => router.push("/signin")}>
          Sign In
        </button>

        <button
          onClick={() => router.push("/signup")}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          Sign Up
        </button>
      </div>
    </header>
  );
}