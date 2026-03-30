import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-(--color-warm-bg) px-6 py-28 md:py-36"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-(--color-text) leading-snug mb-6">
          {hero.headline}
        </h1>
        <p className="text-xl text-(--color-text-muted) mb-10 leading-relaxed">
          {hero.sub}
        </p>
        <a
          href="#contact"
          className="inline-block bg-(--color-gold) hover:bg-(--color-gold-dark) text-white font-bold px-10 py-4 rounded-lg text-lg transition-colors"
        >
          {hero.cta}
        </a>
      </div>
    </section>
  );
}
