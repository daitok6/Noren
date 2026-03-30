import { plans, pricingNote, planFeatures, planCta } from "@/lib/content";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-(--color-warm-bg) px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          料金プラン
        </h2>
        <p className="text-center text-(--color-text-muted) mb-12">
          一括払い・月額不要
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.popular
                  ? "bg-(--color-gold) text-white shadow-xl scale-105"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              {plan.popular && (
                <span className="text-xs font-bold bg-white text-(--color-gold) rounded-full px-3 py-1 self-start mb-4">
                  人気
                </span>
              )}
              <h3
                className={`text-xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-(--color-text)"
                }`}
              >
                {plan.name}
              </h3>
              <div
                className={`text-4xl font-bold mb-6 ${
                  plan.popular ? "text-white" : "text-(--color-gold)"
                }`}
              >
                {plan.price}
              </div>
              <ul
                className={`text-sm space-y-2 ${
                  plan.popular ? "text-white/90" : "text-(--color-text-muted)"
                }`}
              >
                <li>{plan.pages}ページ</li>
                <li>写真 {plan.photos}</li>
                {planFeatures.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 text-center py-3 rounded-lg font-bold text-sm transition-colors ${
                  plan.popular
                    ? "bg-white text-(--color-gold) hover:bg-gray-50"
                    : "bg-(--color-gold) text-white hover:bg-(--color-gold-dark)"
                }`}
              >
                {planCta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-(--color-text-muted) text-sm mt-8">
          {pricingNote}
        </p>
      </div>
    </section>
  );
}
