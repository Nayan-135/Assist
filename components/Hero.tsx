export default function Hero() {
  return (
    <section className="text-center py-20 px-6">
      <h1 className="text-5xl font-extrabold mb-6">
        AI-Based Exam Evaluation Platform
      </h1>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Automate answer evaluation using AI. Save time, reduce manual work,
        and get instant insights with smart grading.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
          Get Started
        </button>

        <button className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-gray-100">
          Learn More
        </button>
      </div>
    </section>
  );
}