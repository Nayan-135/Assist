"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, getUserRole } from "../../lib/auth";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const user = await getCurrentUser();

      if (!user) {
        router.push("/signin");
        return;
      }

      const role = await getUserRole(user.id);

      if (role === "student") router.push("/dashboard/student");
      else if (role === "teacher") router.push("/dashboard/teacher");
      else if (role === "admin") router.push("/dashboard/admin");
    };

    checkUser();
  }, []);

  return <p className="p-10">Checking authentication...</p>;
}