"use client";

import Image from "next/image";
import { useState } from "react";
import { industries } from "@/lib/content";

export default function IndustryGallery() {
  const [activeId, setActiveId] = useState(industries[0].id);
  const active = industries.find((i) => i.id === activeId)!;

  return (
    <section id="gallery" className="bg-(--color-warm-alt) px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          業種別の制作実例
        </h2>
        <p className="text-center text-(--color-text-muted) mb-10">
          あなたのお店と同じ業種のサイトをご覧ください
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveId(ind.id)}
              aria-pressed={activeId === ind.id}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeId === ind.id
                  ? "bg-(--color-gold) text-white"
                  : "bg-white text-(--color-text-muted) border border-gray-200 hover:border-(--color-gold)"
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>

        {/* Demo display */}
        {active.demos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {active.demos.map((demo) => (
              <div
                key={demo.src}
                className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
              >
                <Image
                  src={demo.src}
                  alt={demo.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-(--color-text-muted) text-sm">
              {active.label}の実例は近日公開予定です
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
