"use client";

import { useState } from "react";
import { supabase } from "../../../../lib/supabaseClient";
import { getCurrentUser } from "../../../../lib/auth";

export default function CreateExam() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([{ text: "", marks: 5 }]);
  const [message, setMessage] = useState("");

  const addQuestion = () => {
    setQuestions([...questions, { text: "", marks: 5 }]);
  };

  const handleCreate = async () => {
    const user = await getCurrentUser();
    if (!user) return;

    // Create exam
    const { data: examData, error } = await supabase
      .from("exams")
      .insert([{ title, created_by: user.id }])
      .select()
      .single();

    if (error) {
      setMessage("Error creating exam");
      return;
    }

    // Insert questions
    const formattedQuestions = questions.map((q) => ({
      exam_id: examData.id,
      question: q.text,
      max_marks: q.marks,
    }));

    await supabase.from("questions").insert(formattedQuestions);

    setMessage("Exam created successfully ✅");
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Create Exam</h1>

      <input
        placeholder="Exam Title"
        className="border p-2 mb-4 w-full"
        onChange={(e) => setTitle(e.target.value)}
      />

      {questions.map((q, index) => (
        <div key={index} className="mb-3">
          <input
            placeholder={`Question ${index + 1}`}
            className="border p-2 w-full"
            onChange={(e) => {
              const newQ = [...questions];
              newQ[index].text = e.target.value;
              setQuestions(newQ);
            }}
          />
        </div>
      ))}

      <button
        onClick={addQuestion}
        className="bg-gray-300 px-4 py-1 rounded mr-3"
      >
        Add Question
      </button>

      <button
        onClick={handleCreate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Create Exam
      </button>

      <p className="mt-3 text-sm">{message}</p>
    </div>
  );
}