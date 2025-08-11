"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import invictusRocket from "@/public/project/invictus-rocket.png";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import aero1 from "@/public/project/aero/1.jpg";
import aero2 from "@/public/project/aero/2.jpg";
import aero3 from "@/public/project/aero/3.jpg";
import avio1 from "@/public/project/avio/1.jpg";
import avio2 from "@/public/project/avio/2.jpg";
import avio3 from "@/public/project/avio/3.jpg";
import strut1 from "@/public/project/strut/1.jpg";
import strut2 from "@/public/project/strut/2.jpg";
import strut3 from "@/public/project/strut/3.jpg";
import ground1 from "@/public/project/ground/1.jpg";
import ground2 from "@/public/project/ground/2.jpg";
import ground3 from "@/public/project/ground/3.jpg";
import prop1 from "@/public/project/prop/1.jpg";
import prop2 from "@/public/project/prop/2.png";
import prop3 from "@/public/project/prop/3.jpg";
import rec1 from "@/public/project/rec/1.jpg";
import rec2 from "@/public/project/rec/2.jpg";
import rec3 from "@/public/project/rec/3.jpg";
gsap.registerPlugin(ScrollTrigger);

export function RocketScroll() {
  const t = useTranslations("common");
  const sections = [
    {
      id: 1,
      title: t("avionics"),
      description: t("avionics-desc"),
      responsibilities: [
        t("avionics-r-1"),
        t("avionics-r-2"),
        t("avionics-r-3"),
        t("avionics-r-4"),
        t("avionics-r-5"),
      ],
      images: [avio1, avio2, avio3],
    },
    {
      id: 2,
      title: t("structures"),
      description: t("structures-desc"),
      responsibilities: [
        t("structures-r-1"),
        t("structures-r-2"),
        t("structures-r-3"),
        t("structures-r-4"),
        t("structures-r-5"),
      ],
      images: [strut1, strut3, strut2],
    },
    {
      id: 3,
      title: t("aerodynamics"),
      description: t("aerodynamics-desc"),
      responsibilities: [
        t("aero-r-1"),
        t("aero-r-2"),
        t("aero-r-3"),
        t("aero-r-4"),
        t("aero-r-5"),
      ],
      images: [aero1, aero2, aero3],
    },
    {
      id: 4,
      title: t("ground"),
      description: t("ground-desc"),
      responsibilities: [
        t("ground-r-1"),
        t("ground-r-2"),
        t("ground-r-3"),
        t("ground-r-4"),
        t("ground-r-5"),
      ],
      images: [ground1, ground2, ground3],
    },
    {
      id: 5,
      title: t("propulsion"),
      description: t("propulsion-desc"),
      responsibilities: [
        t("propulsion-r-1"),
        t("propulsion-r-2"),
        t("propulsion-r-3"),
        t("propulsion-r-4"),
        t("propulsion-r-5"),
      ],
      images: [prop1, prop2, prop3],
    },
    {
      id: 6,
      title: t("recovery"),
      description: t("recovery-desc"),
      responsibilities: [
        t("recovery-r-1"),
        t("recovery-r-2"),
        t("recovery-r-3"),
        t("recovery-r-4"),
        t("recovery-r-5"),
      ],
      images: [rec1, rec2, rec3],
    },
  ];
  const containerRef = useRef(null);
  const rocketRef = useRef(null);
  const sectionsRefs = useRef<HTMLElement[]>([]);
  sectionsRefs.current = [];
  //const [activeSection, setActiveSection] = useState(1);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRefs.current.includes(el)) {
      sectionsRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    sectionsRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            //onEnter: () => setActiveSection(i + 1),
            //onEnterBack: () => setActiveSection(i + 1),
            toggleActions: "play reverse play reverse",
            // markers: true,
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
    <div className="relative flex w-full max-w-5xl mx-auto">
      <div
        ref={rocketRef}
        style={{ willChange: "transform" }}
        className="sticky top-24 left-6 w-fit h-[calc(100vh-128px-48px)]"
      >
        <div className="relative">
          <Image
            src={invictusRocket}
            alt="invictus rocket"
            className="h-full w-auto object-contain"
          />
          {/*<div
            className={cn(
              "transition-all absolute w-[90%] -right-1/3 sm:h-0.5 h-0.25 bg-white flex flex-row justify-end items-center top-[37%]",
              activeSection == 1 && "top-[37%]",
              activeSection == 2 && "top-[45%]",
              activeSection == 3 && "top-[90%]",
              activeSection == 4 && "top-[55%]",
              activeSection == 5 && "top-[80%]",
              activeSection == 6 && "top-[7%]"
            )}
          >
            <div className="sm:w-2 sm:h-2 w-1 h-1 bg-white rounded-full"></div>
          </div>*/}
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex-1 max-w-3xl mx-auto pl-8 py-20 space-y-40"
        style={{ minHeight: "200vh" }}
      >
        {sections.map((section) => (
          <Card
            key={section.id}
            ref={addToRefs}
            className="lg:p-8 md:p-6 sm:p-4 p-3 rounded-lg shadow bg-black/25 border-none"
          >
            <h1 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-rajdhani text-white font-bold pb-2 border-b-2 border-b-white w-full max-w-xs">
              {section.title}
            </h1>
            <p className="lg:text-lg md:text-base sm:text-sm text-xs text-white font-inter">
              {section.description}
            </p>
            <h2 className="lg:text-xl md:text-lg sm:text-base text-sm text-white font-poppins font-semibold">
              {t("main-responsibilities")}
            </h2>
            <div className="w-full flex flex-col gap-2">
              {section.responsibilities.map((i) => {
                return (
                  <div key={i} className="w-full relative pl-4">
                    <div className="absolute sm:min-w-2 sm:w-2 sm:h-2 min-w-1 w-1 h-1 left-0 sm:top-3 top-2 bg-white rounded-full"></div>
                    <p className="lg:text-lg md:text-base sm:text-sm text-xs text-white font-inter">
                      {i}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="w-full grid grid-cols-7 gap-2">
              {section.images.length == 3 && (
                <>
                  <Image
                    src={section.images[0]}
                    alt="image-0"
                    className="col-span-2 aspect-square h-auto w-full object-cover"
                  />
                  <Image
                    src={section.images[1]}
                    alt="image-0"
                    className="col-span-3 aspect-[3/2] w-full object-cover"
                  />
                  <Image
                    src={section.images[2]}
                    alt="image-0"
                    className="col-span-2 aspect-square h-auto w-full object-cover"
                  />
                </>
              )}
              {section.images.length == 2 && (
                <>
                  <Image
                    src={section.images[0]}
                    alt="image-0"
                    className="col-span-2 aspect-square h-auto w-full object-cover"
                  />
                  <Image
                    src={section.images[1]}
                    alt="image-0"
                    className="col-span-2 aspect-square h-auto w-full object-cover"
                  />
                </>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
