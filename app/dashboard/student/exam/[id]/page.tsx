"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../../../lib/supabaseClient";
import { useParams } from "next/navigation";
import { getCurrentUser } from "../../../../../lib/auth";

export default function AttemptExam() {
  const { id } = useParams();
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data } = await supabase
        .from("questions")
        .select("*")
        .eq("exam_id", id);

      setQuestions(data || []);
      setAnswers(new Array(data?.length || 0).fill(""));
    };

    fetchQuestions();
  }, [id]);

  const handleSubmit = async () => {
    const user = await getCurrentUser();
    if (!user) return;

    const { data: submission } = await supabase
      .from("submissions")
      .insert([{ exam_id: id, student_id: user.id }])
      .select()
      .single();

    const formattedAnswers = questions.map((q, i) => ({
      submission_id: submission.id,
      question_id: q.id,
      answer: answers[i],
    }));

    await supabase.from("answers").insert(formattedAnswers);

    setMessage("Submitted successfully ✅");
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">Attempt Exam</h1>

      {questions.map((q, i) => (
        <div key={q.id} className="mb-4">
          <p>{q.question}</p>
          <textarea
            className="border p-2 w-full"
            onChange={(e) => {
              const newAns = [...answers];
              newAns[i] = e.target.value;
              setAnswers(newAns);
            }}
          />
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>

      <p className="mt-3">{message}</p>
    </div>
  );
}