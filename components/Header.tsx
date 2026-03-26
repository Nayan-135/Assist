export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">
        AI Evaluator
      </h1>

      <div className="flex gap-4">
        <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
          Sign In
        </button>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Sign Up
        </button>
      </div>
    </header>
  );
}