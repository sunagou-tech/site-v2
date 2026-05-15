"use client";

import { HeroPhotoBlock, SiteConfig } from "@/types/site";
import EditableText from "../EditableText";
import EditableImage from "../EditableImage";

interface Props {
  block: HeroPhotoBlock;
  config: SiteConfig;
  onChange: (b: HeroPhotoBlock) => void;
}

export default function HeroPhotoBlockComponent({ block, config, onChange }: Props) {
  const u = (patch: Partial<HeroPhotoBlock>) => onChange({ ...block, ...patch });
  const fontClass =
    config.fontFamily === "serif" ? "font-serif" : config.fontFamily === "mono" ? "font-mono" : "font-sans";

  return (
    <section
      className={`relative isolate overflow-hidden bg-white ${fontClass}`}
      style={{ minHeight: "clamp(420px, 62vh, 620px)" }}
    >
      <EditableImage
        url={block.imageUrl}
        onChange={(url) => u({ imageUrl: url })}
        className="absolute inset-0 h-full w-full"
        placeholderGradient={`linear-gradient(120deg, ${config.primaryColor}10 0%, ${config.accentColor}12 100%)`}
        primaryColor={config.primaryColor}
        accentColor={config.accentColor}
        alt="hero visual"
      />

      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.04)_42%,rgba(255,255,255,0.18)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[inherit] items-center justify-center px-6 py-20 text-center">
        <div className="max-w-[720px]">
          <EditableText
            tag="span"
            value={block.eyebrow}
            onChange={(v) => u({ eyebrow: v })}
            className="mb-4 block text-[12px] font-semibold text-gray-900/75"
          />

          <EditableText
            tag="h1"
            value={block.tagline}
            onChange={(v) => u({ tagline: v })}
            multiline
            className="block break-keep text-[clamp(1.9rem,4.2vw,4.5rem)] font-black leading-[1.12] text-gray-950 whitespace-pre-line drop-shadow-[0_1px_14px_rgba(255,255,255,0.85)]"
          />

          <EditableText
            tag="p"
            value={block.body}
            onChange={(v) => u({ body: v })}
            multiline
            className="mx-auto mt-5 block max-w-[42em] text-[14px] leading-[1.9] text-gray-900/70 whitespace-pre-line drop-shadow-[0_1px_12px_rgba(255,255,255,0.90)]"
          />
        </div>
      </div>
    </section>
  );
}
