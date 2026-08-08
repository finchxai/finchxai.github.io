import Container from "../ui/Container";

const stats = [
  {
    number: "50+",
    label: "Projects Delivered",
  },
  {
    number: "100%",
    label: "Custom Design",
  },
  {
    number: "24/7",
    label: "Support",
  },
  {
    number: "5+",
    label: "AI Services",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#050816] py-20">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-white/10"
            >
              <h2 className="text-4xl font-bold text-white">{item.number}</h2>

              <p className="mt-3 text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
