import Container from "../ui/Container";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "OpenAI",
  "Vercel",
];

export default function Trusted() {
  return (
    <section className="bg-[#050816] py-20">
      <Container>
        <div className="text-center">
          <p className="mb-12 text-sm uppercase tracking-[0.45em] text-emerald-400">
            TECHNOLOGIES WE BUILD WITH
          </p>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-white/10"
              >
                <h3 className="text-lg font-semibold text-white">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
