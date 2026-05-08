export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">Build Your Website with AI</h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Describe what you want in plain language and watch your site come to life.
            No coding required.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#features"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#how-it-works"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Buildee?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-2xl mb-4">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center">
                <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Join the beta and build your first site in minutes.
        </p>
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Join Beta
        </a>
      </section>
    </div>
  );
}

const features = [
  {
    icon: "\u2728",
    title: "Natural Language Editing",
    description: "Just describe the changes you want. Our AI understands context and applies edits intelligently.",
  },
  {
    icon: "\u26A1",
    title: "Instant Preview",
    description: "See your changes reflected in real-time. No waiting for builds or deployments.",
  },
  {
    icon: "\uD83D\uDD12",
    title: "Version Control Built In",
    description: "Every change is tracked. Roll back to any previous version with a single click.",
  },
];

const steps = [
  {
    title: "Describe Your Site",
    description: "Tell us what you want to build using everyday language. Be as detailed or brief as you like.",
  },
  {
    title: "Review & Refine",
    description: "Preview the generated site and request changes conversationally until it matches your vision.",
  },
  {
    title: "Publish & Grow",
    description: "Deploy your site with one click. Continue iterating and adding features anytime.",
  },
];
