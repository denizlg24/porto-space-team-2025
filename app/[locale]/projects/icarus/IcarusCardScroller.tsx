"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardHeader } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
gsap.registerPlugin(ScrollTrigger);

export function IcarusScroll() {
  const t = useTranslations("common");
  const sections = [
    {
      id: 1,
      title: t("telemetry"),
      description: t("telemetry-desc"),
    },
    {
      id: 2,
      title: t("attitude"),
      description: t("attitude-desc"),
    },
    {
      id: 3,
      title: t("payload"),
      description: t("payload-desc"),
    },
    {
      id: 4,
      title: t("structures-thermal"),
      description: t("structures-thermal-desc"),
    },
    {
      id: 5,
      title: t("computer"),
      description: t("computer-desc"),
    },
    {
      id: 6,
      title: t("electrical"),
      description: t("electrical-desc"),
    },
  ];
  const containerRef = useRef(null);
  const sectionsRefs = useRef<HTMLElement[]>([]);
  sectionsRefs.current = [];

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRefs.current.includes(el)) {
      sectionsRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    sectionsRefs.current.forEach((section, i) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 40, x: (-1) ** i * 40 },
        {
          autoAlpha: 1,
          y: 0,
          x: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top bottom", // when top of section hits bottom of viewport
            end: "bottom center", // when bottom of section hits top of viewport
            toggleActions: "play reverse play reverse",
            //markers: true,
          },
          duration: 0.6,
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative flex w-full max-w-4xl mx-auto px-4">
      <div
        ref={containerRef}
        className="flex-1 max-w-4xl mx-auto pb-20 lg:space-y-25 md:space-y-20 sm:space-y-15 space-y-10"
        style={{ minHeight: "200vh" }}
      >
        {sections.map((section) => (
          <Card
            ref={addToRefs}
            key={section.id}
            className={cn(
              "p-4 w-full max-w-3xl bg-feup/50 border-none h-fit! mx-auto transition-opacity-"
            )}
          >
            <CardHeader className="flex flex-col items-center px-0">
              <h1 className="text-white text-center font-rajdhani font-bold lg:text-3xl md:text-2xl sm:text-xl text-lg border-b-2 border-white sm:pb-2 pb-0 px-4">
                {section.title}
              </h1>
              <p className="mt-2 text-white font-inter text-left lg:text-lg md:text-base sm:text-sm text-xs">
                {section.description}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
