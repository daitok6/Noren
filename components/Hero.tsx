import Image from "next/image";
import { hero, industries } from "@/lib/content";

export default function Hero() {
  const firstDemo = industries.flatMap((i) => i.demos)[0];

  return (
    <section
      id="hero"
      className="bg-(--color-warm-bg) px-6 py-20 md:py-28"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Copy */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-(--color-text) leading-snug mb-5">
            {hero.headline}
          </h1>
          <p className="text-lg text-(--color-text-muted) mb-8 leading-relaxed">
            {hero.sub}
          </p>
          <a
            href="#contact"
            className="inline-block bg-(--color-gold) hover:bg-(--color-gold-dark) text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            {hero.cta}
          </a>
        </div>

        {/* Demo screenshot */}
        {firstDemo && (
          <div className="flex-1 w-full max-w-md md:max-w-none">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src={firstDemo.src}
                alt={firstDemo.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
