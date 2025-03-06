import quizData from "../assets/quizData";
import Link from "next/link";

export default function Classes() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Select Your Class</h1>
      <div className="grid grid-cols-2 gap-6">
        {quizData.map((cls) => (
          <Link key={cls.class} href={`/classes/${cls.class}`} >
            <div className="cursor-pointer px-6 py-4 bg-white text-lg font-semibold text-gray-800 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
              Class {cls.class}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
