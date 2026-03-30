import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ノレン — 地元のお店のためのウェブサイト制作",
  description:
    "ホームページのない地元の名店に、一度きりの制作費でプロのサイトを。月額不要・完全引き渡し。",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
