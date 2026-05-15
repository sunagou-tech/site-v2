"use client";

import { HeroPhotoBlock, SiteConfig } from "@/types/site";
import EditableText from "../EditableText";
import EditableImage from "../EditableImage";
import LinkableButton from "../LinkableButton";

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
      className={`relative isolate overflow-hidden bg-[#f7f6f2] ${fontClass}`}
      style={{ minHeight: "clamp(660px, 92vh, 780px)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-24 opacity-70"
        style={{ background: `linear-gradient(180deg, ${config.primaryColor}10, transparent)` }}
        aria-hidden="true"
      />

      <div className="mx-auto grid min-h-[inherit] w-full max-w-[1440px] grid-cols-1 items-stretch px-5 py-8 md:grid-cols-[minmax(360px,42%)_1fr] md:px-10 lg:px-14">
        {/* Editorial copy panel */}
        <div className="relative z-20 flex items-center md:py-12">
          <div className="w-full max-w-[560px] border border-black/10 bg-white/92 px-7 py-8 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur md:-mr-16 md:px-10 md:py-11">
            <div className="mb-7 flex items-center gap-4">
              <div className="h-px w-10" style={{ backgroundColor: config.accentColor }} />
              <EditableText
                tag="span"
                value={block.eyebrow}
                onChange={(v) => u({ eyebrow: v })}
                className="text-[11px] font-semibold uppercase text-gray-500"
              />
            </div>

            <EditableText
              tag="h1"
              value={block.tagline}
              onChange={(v) => u({ tagline: v })}
              multiline
              className="block max-w-[11em] break-keep text-[clamp(2.2rem,5vw,5.8rem)] font-black leading-[1.04] text-gray-950 whitespace-pre-line"
            />

            <div className="mt-7 h-px w-full bg-gray-200" />

            <EditableText
              tag="p"
              value={block.body}
              onChange={(v) => u({ body: v })}
              multiline
              className="mt-7 block max-w-[34em] text-[15px] leading-[2] text-gray-600 whitespace-pre-line"
            />

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <LinkableButton
                label={block.buttonText}
                url={block.buttonUrl ?? ""}
                onLabelChange={(v) => u({ buttonText: v })}
                onUrlChange={(v) => u({ buttonUrl: v })}
                className="inline-flex items-center gap-2 rounded-none px-7 py-4 text-sm font-bold transition-opacity hover:opacity-85"
                style={{ backgroundColor: config.primaryColor, color: "#ffffff" }}
              />
              <EditableText
                tag="span"
                value={block.caption}
                onChange={(v) => u({ caption: v })}
                className="text-[11px] leading-relaxed text-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Key visual */}
        <div className="relative min-h-[390px] overflow-hidden md:my-12 md:min-h-0">
          <EditableImage
            url={block.imageUrl}
            onChange={(url) => u({ imageUrl: url })}
            className="absolute inset-0 h-full w-full"
            placeholderGradient={`linear-gradient(160deg, ${config.primaryColor}18 0%, ${config.accentColor}14 100%)`}
            primaryColor={config.primaryColor}
            accentColor={config.accentColor}
            alt="hero visual"
          />

          <div
            className="absolute bottom-0 left-0 h-2 w-28"
            style={{ backgroundColor: config.accentColor }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
