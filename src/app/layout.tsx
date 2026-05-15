import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "合同会社ルナマーケティング｜AI導入支援・SNS集客・オンライン講座制作",
  description:
    "合同会社ルナマーケティングは、AI導入支援、SNS集客、オンライン講座制作を行う埼玉県所沢市のデジタルマーケティング会社です。",
  keywords: [
    "合同会社ルナマーケティング",
    "ルナマーケティング",
    "Luna Marketing",
    "AI導入支援",
    "SNS集客",
    "オンライン講座制作",
    "埼玉県所沢市",
  ],
  alternates: {
    canonical: "https://luna-two-dun.vercel.app/",
  },
  openGraph: {
    title: "合同会社ルナマーケティング｜AI導入支援・SNS集客・オンライン講座制作",
    description:
      "合同会社ルナマーケティングは、AI導入支援、SNS集客、オンライン講座制作を通じて個人事業主・スモールビジネスの事業運営を支援しています。",
    type: "website",
    url: "https://luna-two-dun.vercel.app/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "合同会社ルナマーケティング",
              alternateName: "Luna Marketing LLC",
              url: "https://luna-two-dun.vercel.app/",
              telephone: "050-1720-6408",
              foundingDate: "2025-04-10",
              address: {
                "@type": "PostalAddress",
                addressRegion: "埼玉県",
                addressLocality: "所沢市",
                streetAddress: "並木7丁目1番地3-403",
                addressCountry: "JP",
              },
              description:
                "合同会社ルナマーケティングは、AI導入支援、SNS集客、オンライン講座制作を行うデジタルマーケティング会社です。",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
