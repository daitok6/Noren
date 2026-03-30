import { pricing } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-(--color-warm-bg) px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          料金
        </h2>
        <p className="text-center text-(--color-text-muted) mb-12">
          一括払い・月額不要
        </p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Plan header */}
          <div className="bg-(--color-gold) px-8 py-7 text-white">
            <p className="text-sm font-semibold opacity-80 mb-1 tracking-wide">
              Noren プラン
            </p>
            <h3 className="text-2xl font-bold leading-snug">
              {pricing.planName}
            </h3>
          </div>

          {/* Price */}
          <div className="px-8 py-7 border-b border-gray-100">
            <div className="flex items-end gap-3 flex-wrap">
              <span className="text-5xl font-bold text-(--color-gold)">
                {pricing.price}
              </span>
              <div className="pb-1 text-(--color-text-muted) text-sm leading-tight">
                <div className="font-semibold">{pricing.setupFee}</div>
                <div className="text-xs opacity-70">{pricing.setupNote}</div>
              </div>
            </div>
          </div>

          {/* What's included */}
          <div className="px-8 py-7 border-b border-gray-100">
            <p className="text-xs font-bold uppercase tracking-widest text-(--color-text-muted) mb-4">
              含まれるもの
            </p>
            <ul className="space-y-3">
              {pricing.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="text-(--color-gold) font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add-on note */}
          <div className="px-8 py-6 bg-(--color-warm-alt)">
            <p className="text-sm text-(--color-text-muted) mb-2">
              {pricing.addonNote}
            </p>
            <a
              href="#contact"
              className="text-sm font-bold text-(--color-gold) hover:underline"
            >
              {pricing.addonCta}
            </a>
          </div>

          {/* CTA */}
          <div className="px-8 py-7">
            <a
              href="#contact"
              className="block text-center bg-(--color-gold) hover:bg-(--color-gold-dark) text-white font-bold py-4 rounded-xl text-lg transition-colors"
            >
              {pricing.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
