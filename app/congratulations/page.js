"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

function CongratulationsContent() {
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Congratulations! 🎉</h1>
      <p className="text-lg text-gray-700">You have successfully completed all quiz phases!</p>
      <p className="text-xl font-semibold text-blue-600 mt-4">Total Marks: {score}</p>
      <button
        onClick={() => router.push("/")}
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go to Home
      </button>
    </div>
  );
}

export default function Congratulations() {
  return (
    <Suspense fallback={<p className="text-center text-gray-500">Loading...</p>}>
      <CongratulationsContent />
    </Suspense>
  );
}
