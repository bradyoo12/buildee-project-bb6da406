export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Buildee</h1>
          <p className="text-xl text-indigo-100">
            We believe everyone should be able to create a beautiful website, regardless of technical skill.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-8">
            Buildee is an AI-powered website builder designed for non-developers.
            We turn natural language into production-ready websites, handling
            everything from design to deployment so you can focus on your content
            and business.
          </p>

          <h2 className="text-2xl font-bold mb-4">How We're Different</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-2">{d.title}</h3>
                <p className="text-gray-600">{d.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 mb-8">
            We're a small, passionate team of engineers and designers who
            believe in the power of AI to democratize web development. Based in
            Seoul, we're building the future of website creation.
          </p>
        </div>
      </section>
    </div>
  );
}

const differentiators = [
  {
    title: "Conversational Interface",
    description:
      "No drag-and-drop, no templates. Just tell us what you need and we build it.",
  },
  {
    title: "Real Code Output",
    description:
      "Your site is real React code, version-controlled on GitHub. You always own your code.",
  },
  {
    title: "Smart Change Detection",
    description:
      "Simple edits happen instantly. Complex changes go through a review process you control.",
  },
  {
    title: "Built-in Guardrails",
    description:
      "Multiple safety layers ensure your site stays consistent, performant, and secure.",
  },
];
