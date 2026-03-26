"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function TeacherDashboard() {
  const [exams, setExams] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchExams = async () => {
      const { data } = await supabase.from("exams").select("*");
      setExams(data || []);
    };

    fetchExams();
  }, []);

  return (
    <div className="p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Teacher Dashboard 👨‍🏫
        </h1>

        <button
          onClick={() => router.push("/dashboard/teacher/create-exam")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          + Create Exam
        </button>
      </div>

      {/* Exams List */}
      <h2 className="text-xl font-semibold mb-4">Your Exams</h2>

      {exams.length === 0 ? (
        <p className="text-gray-500">No exams created yet.</p>
      ) : (
        <div className="grid gap-4">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="p-4 border rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{exam.title}</h3>
              <p className="text-sm text-gray-500">
                Created on: {new Date(exam.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}