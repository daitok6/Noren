export const hero = {
  headline: "地元の名店を、ウェブでも輝かせる。",
  sub: "ホームページのないお店に、一度きりの制作費でプロのサイトを。",
  cta: "無料で相談する →",
};

export type Industry = {
  id: string;
  label: string;
  demos: { src: string; alt: string }[];
};

export const industries: Industry[] = [
  {
    id: "restaurant",
    label: "飲食店",
    demos: [{ src: "/demos/restaurant.png", alt: "飲食店のデモサイト" }],
  },
  {
    id: "salon",
    label: "サロン・美容",
    demos: [],
  },
  {
    id: "clinic",
    label: "整体・クリニック",
    demos: [],
  },
  {
    id: "trades",
    label: "工務店・職人",
    demos: [],
  },
];

export const differentiators = [
  {
    icon: "🏪",
    title: "地元特化",
    desc: "地元のお店だけを専門に制作。チェーン店やECサイトはお断りしています。",
  },
  {
    icon: "💴",
    title: "一括払い・継続費ゼロ",
    desc: "月額費用はかかりません。お支払い後、サイトは完全にお客様のものです。",
  },
  {
    icon: "📦",
    title: "引き渡しで終わり",
    desc: "ソースコード・ドメイン・サーバー設定すべて譲渡。依存関係はゼロです。",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "無料相談",
    desc: "お店の雰囲気・希望・ご予算をヒアリングします。",
  },
  {
    step: "02",
    title: "デモ制作",
    desc: "見積もり確定・ご入金後、2〜3週間で初稿をお届けします。",
  },
  {
    step: "03",
    title: "納品・引き渡し",
    desc: "ドメイン取得・Vercel設定・Google Search Console登録まで対応します。",
  },
];

export type Plan = {
  name: string;
  price: string;
  pages: string;
  photos: string;
  popular: boolean;
};

export const plans: Plan[] = [
  { name: "ライト", price: "¥98,000", pages: "3", photos: "5枚", popular: false },
  { name: "スタンダード", price: "¥198,000", pages: "5", photos: "15枚", popular: true },
  { name: "プレミアム", price: "¥298,000", pages: "8", photos: "無制限", popular: false },
];

export const pricingNote =
  "全プラン共通：+¥20,000 初期設定費（ドメイン・Vercel・Google Search Console）";

export const faq = [
  {
    q: "毎月費用がかかりますか？",
    a: "かかりません。一括払いで、その後はドメイン更新費（約¥3,000/年）のみです。",
  },
  {
    q: "自分でページを更新できますか？",
    a: "はい。納品時に操作マニュアルをお渡しします。画像の差し替えや文章の修正は、専門知識なしでできます。",
  },
  {
    q: "どれくらいで完成しますか？",
    a: "ご入金後、約3〜4週間が目安です。写真素材のご提供が早いほど、納品も早くなります。",
  },
  {
    q: "写真がない場合はどうなりますか？",
    a: "フリー素材でも制作できます。ただし、実際のお店の写真を使った方が格段に魅力的になります。",
  },
];

export const planFeatures = ["スマホ対応", "お問い合わせフォーム"];

export const planCta = "このプランで相談する";

export const contact = {
  headline: "まずは無料でご相談ください",
  note: "返信は通常1営業日以内",
  emailCta: "📧 メールで相談",
  lineCta: "💬 LINE で相談",
  email: "noren.website@gmail.com",
  lineUrl: "https://lin.ee/vtivySq",
};
