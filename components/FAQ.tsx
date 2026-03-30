"use client";

import { useState } from "react";
import { faq } from "@/lib/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-(--color-warm-alt) px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          よくある質問
        </h2>
        <p className="text-center text-(--color-text-muted) mb-12">
          ご不明な点はお気軽にお問い合わせください
        </p>
        <div className="flex flex-col gap-3">
          {faq.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold hover:bg-gray-50 transition-colors"
              >
                <span>Q: {item.q}</span>
                <span className="text-(--color-gold) font-bold text-xl shrink-0 ml-4">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-(--color-text-muted) text-sm leading-relaxed border-t border-gray-100 pt-4">
                  A: {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
