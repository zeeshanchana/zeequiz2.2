import quizData from "../../assets/quizData"
import Link from "next/link";

export default function Subjects({ params }) {
  const classId = Number(params.classId); // Get class ID from URL
  const selectedClass = quizData.find((cls) => cls.class === classId);

  if (!selectedClass) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-red-500">Class not found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Subjects for Class {selectedClass.class}
      </h1>
      <div className="grid grid-cols-2 gap-6">
        {selectedClass.subjects.map((subject, index) => (
          <Link
            key={index}
            href={`/classes/${classId}/${subject.name}`}
            className="cursor-pointer px-6 py-4 bg-white text-lg font-semibold text-gray-800 rounded-lg shadow-md hover:bg-green-500 hover:text-white transition duration-300"
          >
            {subject.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
