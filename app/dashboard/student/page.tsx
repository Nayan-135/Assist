"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function StudentDashboard() {
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
      <h1 className="text-2xl font-bold mb-4">Available Exams</h1>

      {exams.map((exam) => (
        <div
          key={exam.id}
          className="border p-4 mb-3 rounded cursor-pointer"
          onClick={() => router.push(`/dashboard/student/exam/${exam.id}`)}
        >
          {exam.title}
        </div>
      ))}
    </div>
  );
}