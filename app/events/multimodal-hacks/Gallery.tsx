"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const cover = {
  src: "/events/multimodal/cover.jpg",
  alt: "Multimodal Hacks winners on stage",
};

const photos: { src: string; alt: string }[] = [
  { src: "/events/multimodal/01.jpg", alt: "A speaker presents to the room" },
  { src: "/events/multimodal/02.jpg", alt: "Builders working in the lounge" },
  { src: "/events/multimodal/03.jpg", alt: "Pinecone talk: more than dense search" },
  { src: "/events/multimodal/04.jpg", alt: "Hybrid search talk, step by step" },
  { src: "/events/multimodal/05.jpg", alt: "Clerk talk: auth in 60 seconds" },
  { src: "/events/multimodal/06.jpg", alt: "Attendees in front of the Multimodal Hacks screen" },
  { src: "/events/multimodal/07.jpg", alt: "The room watching demos" },
];

const all = [cover, ...photos];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i + all.length - 1) % all.length)),
    []
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % all.length)),
    []
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, prev, next]);

  return (
    <section className="gallery">
      <div className="glabel">In the room</div>

      <button
        className="gcover"
        onClick={() => setIndex(0)}
        aria-label="Open cover photo"
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(max-width:1120px) 100vw, 1120px"
          priority
        />
      </button>
      <div className="gcaption">The winners · Multimodal Hacks, NY Tech Week 2026</div>

      {photos.length > 0 && (
        <div className="ggrid">
          {photos.map((p, i) => (
            <button
              key={p.src}
              className="gthumb"
              onClick={() => setIndex(i + 1)}
              aria-label={`Open photo ${i + 1}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width:720px) 50vw, 25vw"
              />
            </button>
          ))}
        </div>
      )}

      <div className="gmore">More images coming soon ✦</div>

      {index !== null && (
        <div className="mmh-lightbox" onClick={close}>
          <button className="lbclose" onClick={close} aria-label="Close">
            ✕
          </button>
          {all.length > 1 && (
            <button
              className="lbnav lbprev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
            >
              ‹
            </button>
          )}
          <Image
            className="lbimg"
            src={all[index].src}
            alt={all[index].alt}
            width={1600}
            height={1067}
            onClick={(e) => e.stopPropagation()}
            priority
          />
          {all.length > 1 && (
            <button
              className="lbnav lbnext"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
            >
              ›
            </button>
          )}
        </div>
      )}
    </section>
  );
}
