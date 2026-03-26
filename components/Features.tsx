const features = [
  {
    title: "AI Evaluation",
    desc: "Automatically evaluate descriptive answers using AI.",
  },
  {
    title: "Role-Based Access",
    desc: "Separate dashboards for students, teachers, and admins.",
  },
  {
    title: "Real-Time Results",
    desc: "Instant scoring and performance analytics.",
  },
  {
    title: "Secure System",
    desc: "Authentication powered by Supabase.",
  },
];

export default function Features() {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}