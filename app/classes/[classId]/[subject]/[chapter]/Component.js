"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import quizData from "../../../../assets/quizData";

export default    function Component({ classId, subject, chapter }) {
  const router = useRouter();
 

  // Find the chapter questions
  const selectedClass = quizData.find((cls) => cls.class === Number(classId));
  const selectedSubject = selectedClass?.subjects.find((sub) => sub.name === decodeURIComponent(subject));
  const selectedChapter = selectedSubject?.chapters.find((ch) => ch.name === decodeURIComponent(chapter));
 
  if (!selectedChapter) {
    return <h1 className="text-2xl text-red-500">Chapter not found!</h1>;
  }

  // const phases = [
  //   { key: "phase1", questions: 20, passMark: 7 },
  //   { key: "phase2", questions: 40, passMark: 14 },
  //   { key: "phase3", questions: 80, passMark: 33 }
  // ];
  const phases = [
    { key: "phase1", questions: 2, passMark: 1 },
    { key: "phase2", questions: 3, passMark: 2 },
    { key: "phase3", questions: 4, passMark: 3 }
  ];

  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0); // Tracks total marks
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const phase = phases[currentPhaseIndex];
  const questions = selectedChapter.questions[phase.key];

  if (!questions || questions.length < phase.questions) {
    return <h1 className="text-2xl text-red-500">Questions not available!</h1>;
  }

  const handleAnswer = () => {
    if (selectedAnswer === null) return;
    if (questions[currentQuestionIndex].answer === selectedAnswer) {
      setScore(score + 1);
      setTotalScore(totalScore + 1); // Update total score
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      checkPhaseCompletion();
    }
  };

  const checkPhaseCompletion = () => {
    if (score >= phase.passMark) {
      if (currentPhaseIndex + 1 < phases.length) {
        // Move to next phase
        setCurrentPhaseIndex(currentPhaseIndex + 1);
        setCurrentQuestionIndex(0);
        setScore(0);
      } else {
        // Completed all phases
        setIsFinished(true);
      }
    } else {
      // Failed the quiz, redirect to home
      alert(`Quiz Over! You scored ${score}. Try again.`);
      router.push("/");
    }
  };

  // if (isFinished) {
  //   return (
  //     <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
  //       <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Congratulations! 🎉</h1>
  //       <p className="text-lg text-gray-700">You have successfully completed all quiz phases!</p>
  //       <button
  //         onClick={() => router.push("/")}
  //         className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
  //       >
  //         Go to Home
  //       </button>
  //     </div>
  //   );
  // }

  if (isFinished) {
    router.push(`/congratulations?score=${totalScore}`);
    return null; // Prevents rendering while redirecting
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">
        {selectedChapter.name} - {phase.key.toUpperCase()}
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Question {currentQuestionIndex + 1} of {questions.length}
      </p>

      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">{questions[currentQuestionIndex].question}</h2>
        <div className="grid grid-cols-2 gap-4">
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md border ${
                selectedAnswer === option ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={handleAnswer}
          className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition w-full"
        >
          Submit Answer
        </button>
      </div>
    </div>
  );
}

