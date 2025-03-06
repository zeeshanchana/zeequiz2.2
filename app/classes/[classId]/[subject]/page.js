import quizData from "../../../assets/quizData";
import Link from "next/link";

export default function Chapters({ params }) {
  const classId = Number(params.classId);
  const subjectName = decodeURIComponent(params.subject);

  // Find the selected class
  const selectedClass = quizData.find((cls) => cls.class === classId);
  if (!selectedClass) {
    return <h1 className="text-2xl font-semibold text-red-500">Class not found!</h1>;
  }

  // Find the selected subject
  const selectedSubject = selectedClass.subjects.find(
    (subject) => subject.name === subjectName
  );
  if (!selectedSubject) {
    return <h1 className="text-2xl font-semibold text-red-500">Subject not found!</h1>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Chapters in {selectedSubject.name}
      </h1>
      <div className="grid grid-cols-2 gap-6">
        {selectedSubject.chapters.map((chapter, index) => (
          <Link
            key={index}
            href={`/classes/${classId}/${subjectName}/${chapter.name}`}
            className="cursor-pointer px-6 py-4 bg-white text-lg font-semibold text-gray-800 rounded-lg shadow-md hover:bg-purple-500 hover:text-white transition duration-300"
          >
            {chapter.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
