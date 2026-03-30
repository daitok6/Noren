import { differentiators } from "@/lib/content";

export default function WhyNoren() {
  return (
    <section id="why" className="bg-(--color-warm-bg) px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          なぜノレンか
        </h2>
        <p className="text-center text-(--color-text-muted) mb-12">
          他のWeb制作会社との3つの違い
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"
            >
              <div className="text-4xl mb-4">{d.icon}</div>
              <h3 className="text-lg font-bold mb-3">{d.title}</h3>
              <p className="text-(--color-text-muted) text-sm leading-relaxed">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
