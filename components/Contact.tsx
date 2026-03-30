import { contact } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-(--color-warm-bg) px-6 py-24">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          {contact.headline}
        </h2>
        <p className="text-(--color-text-muted) mb-10">{contact.note}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="bg-(--color-gold) hover:bg-(--color-gold-dark) text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            {contact.emailCta}
          </a>
          <a
            href={contact.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-(--color-line-green) hover:opacity-90 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            {contact.lineCta}
          </a>
        </div>
        <p className="text-(--color-text-muted) text-sm mt-8">
          ノレン — {contact.email}
        </p>
      </div>
    </section>
  );
}
