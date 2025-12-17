"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-blue-200 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Welcome to Learn English!
      </h1>

      <button
        onClick={() => router.push("/learn")}
        className="px-6 py-3 text-xl bg-blue-500 text-white rounded-2xl shadow-lg
        active:scale-95 transition-transform hover:bg-blue-600"
      >
        Let’s Learn!
      </button>
    </main>
  );
}
