import { processSteps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="bg-(--color-warm-alt) px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          制作の流れ
        </h2>
        <p className="text-center text-(--color-text-muted) mb-12">
          3ステップで完成します
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-0">
          {processSteps.map((step, i) => (
            <div key={step.step} className="flex md:flex-col items-center flex-1">
              {/* Step box */}
              <div className="flex md:flex-col items-center md:text-center flex-1 gap-4 md:gap-0">
                <div className="text-3xl font-bold text-(--color-gold) md:mb-3 shrink-0 w-12 text-center">
                  {step.step}
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-1 md:w-full">
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-(--color-text-muted) text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
              {/* Arrow between steps — mobile: down arrow, desktop: right arrow */}
              {i < processSteps.length - 1 && (
                <div aria-hidden="true" className="text-(--color-gold) font-bold text-2xl md:hidden ml-4">
                  ↓
                </div>
              )}
              {i < processSteps.length - 1 && (
                <div aria-hidden="true" className="hidden md:block text-(--color-gold) font-bold text-2xl px-3">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
