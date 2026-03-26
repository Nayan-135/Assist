import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Exam Evaluator",
  description: "AI-Based Exam Evaluation Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}