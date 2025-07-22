"use client";
import { useTranslations } from "next-intl";
import invictusBg from "@/public/project/space-dark-clouds-galaxy-abstract1.jpg";
import Image from "next/image";
import invictus from "@/public/project/INVICTUS.svg";
import invictusRocketHorizontal from "@/public/project/invictus-rocket-horizontal.png";
import avionics from "@/public/project/avionics.png";
import recovery from "@/public/project/recovery-invictus.png";
import structures from "@/public/project/structures-invictus.png";
import propulsion from "@/public/project/propulsion-invictus.png";
import aerodynamics from "@/public/project/aerodynamics-invictus.png";
import invictusCover from "@/public/project/invictus-under-cover.webp";
import ground from "@/public/project/ground-invictus.png";
import {
  BadgeEuro,
  ChevronsUpIcon,
  Rocket,
  RulerDimensionLine,
  Weight,
} from "lucide-react";
import { FaBullseye } from "react-icons/fa6";
import fire_test from "@/public/project/Imagem WhatsApp 2024-09-28 às 12.24.45_b5748d0d.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { FaTools } from "react-icons/fa";
export const InvictusDesc = () => {
  const t = useTranslations("common");
  const sections = [
    {
      id: "ground",
      title: t("ground"),
      description: t("ground-desc"),
    },
    {
      id: "aerodynamics",
      title: t("aerodynamics"),
      description: t("aerodynamics-desc"),
    },
    {
      id: "propulsion",
      title: t("propulsion"),
      description: t("propulsion-desc"),
    },
    {
      id: "structures",
      title: t("structures"),
      description: t("structures-desc"),
    },
    {
      id: "avionics",
      title: t("avionics"),
      description: t("avionics-desc"),
    },
    {
      id: "recovery",
      title: t("recovery"),
      description: t("recovery-desc"),
    },
  ];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleSectionClick = (id: string) => {
    const index = sections.findIndex((s) => s.id === id);
    if (index !== -1) {
      api?.scrollTo(index);
    }
  };

  const [count, setCount] = useState(0);
  const scrollLockRef = useRef(false); // debounce lock
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const lastScrollY = useRef(0);
  const scrollDirection = useRef<"up" | "down">("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDirection.current =
        currentScrollY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleIntersection = (
      entry: IntersectionObserverEntry,
      direction: "up" | "down"
    ) => {
      const isVisible = entry.isIntersecting;
      if (scrollDirection.current === direction && isVisible) {
        setInView(true);
      } else if (scrollDirection.current !== direction) {
        setInView(false);
      }
    };

    const observerTop = new IntersectionObserver(
      ([entry]) => handleIntersection(entry, "up"),
      { threshold: 0 }
    );

    const observerBottom = new IntersectionObserver(
      ([entry]) => handleIntersection(entry, "down"),
      { threshold: 0 }
    );

    if (topRef.current) observerTop.observe(topRef.current);
    if (bottomRef.current) observerBottom.observe(bottomRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (topRef.current) observerTop.unobserve(topRef.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (bottomRef.current) observerBottom.unobserve(bottomRef.current);
    };
  }, []);

  // Set up carousel + hijack scroll
  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    const handleWheel = (event: WheelEvent) => {
      if (!inView || !api) return;

      const isFirst = current === 0;
      const isLast = current === count - 1;

      if ((event.deltaY < 0 && isFirst) || (event.deltaY > 0 && isLast)) return;

      // Hijack scroll only inside the section
      event.preventDefault();

      if (scrollLockRef.current) return;
      scrollLockRef.current = true;
      setTimeout(() => (scrollLockRef.current = false), 500);

      if (event.deltaY > 0) {
        api.scrollNext();
      } else {
        api.scrollPrev();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      api.off("select", onSelect);
    };
  }, [api, current, count, inView]);
  return (
    <main className="relative flex flex-col items-center sm:gap-16 gap-8 py-12 w-full outline-0! ring-0!">
      <h1 className="sm:mt-24 mt-16 w-full max-w-xs pb-4 text-center text-white font-bebas font-semibold lg:text-7xl md:text-6xl sm:text-5xl text-4xl border-b-2 sm:mx-8 mx-4">
        {t("invictus")} 1.0
      </h1>
      <div className="flex sm:flex-row flex-col-reverse justify-between sm:gap-6 gap-4 items-center w-full max-w-xl sm:mx-8 mx-4">
        <div className="flex sm:flex-col flex-row justify-center gap-2 sm:text-left text-center w-full max-w-lg text-white font-bebas font-semibold">
          <p className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
            {t("project")}
          </p>
          <p className="lg:text-7xl md:text-6xl sm:text-4xl text-3xl">
            {t("invictus")}
          </p>
          <p className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl">2024</p>
        </div>
        <Image
          src={invictus}
          width={1080}
          height={1080}
          alt="Invictus logo"
          className={
            "relative w-full h-auto aspect-square sm:max-w-48 max-w-24 -rotate-48"
          }
        />
      </div>
      <div className="w-full sm:-mx-8 -mx-4 p-2 flex items-center justify-center bg-gray-300/75">
        <div className="w-full lg:max-w-lg max-w-md flex flex-row justify-between gap-6 sm:px-0 px-6">
          <div className="flex flex-col gap-2 items-center col-span-1 w-full max-w-[300px]">
            <BadgeEuro className="w-full h-auto aspect-square md:max-w-[160px] max-w-[100px] text-[#041322]" />
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-lg text-[#041322] font-bebas text-center">
              {t("low-budget")}
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center col-span-1 w-full max-w-[300px]">
            <FaBullseye className="w-full h-auto aspect-square md:max-w-[160px] max-w-[100px] text-[#041322]" />
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-lg text-[#041322] font-bebas text-center">
              {t("efficient")}
            </p>
          </div>
        </div>
      </div>
      <h2 className="w-full max-w-3xl text-left text-white font-arimo lg:text-2xl md:text-xl sm:text-lg text-md sm:px-8 px-4">
        The first ever student made hybrid propulsion rocket, in Portugal, was
        designed and built by us in 2024 , the result of two years of hard work.
      </h2>
      <Image
        src={invictusRocketHorizontal}
        width={686}
        height={206}
        alt="Invictus rocket"
        className={"w-full max-w-3xl object-contain -mt-12 sm:mx-8 mx-4"}
      />
      <div className="w-full sm:-mx-8 -mx-4 p-2 flex items-center justify-center bg-gray-300/75">
        <div className="w-full lg:max-w-3xl sm:max-w-lg flex flex-row justify-between">
          <div className="flex flex-col gap-2 items-center col-span-1 w-full max-w-[300px]">
            <RulerDimensionLine className="w-full h-auto aspect-square md:max-w-[120px] max-w-[80px] text-[#041322]" />
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-lg text-[#041322] font-bebas text-center">
              {t("length")}
            </p>
            <p className="lg:text-2xl md:text-xl text-lg text-[#041322] font-bebas text-center -mt-4">
              4.3m
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center col-span-1 w-full max-w-[300px]">
            <Weight className="w-full h-auto aspect-square md:max-w-[120px] max-w-[80px] text-[#041322]" />
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-lg text-[#041322] font-bebas text-center">
              {t("mass")}
            </p>
            <p className="lg:text-2xl md:text-xl text-lg text-[#041322] font-bebas text-center -mt-4">
              54,1kg
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center col-span-1 w-full max-w-[300px]">
            <ChevronsUpIcon className="w-full h-auto aspect-square md:max-w-[120px] max-w-[80px] text-[#041322]" />
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-lg text-[#041322] font-bebas text-center">
              {t("max-velocity")}
            </p>
            <p className="lg:text-2xl md:text-xl text-lg text-[#041322] font-bebas text-center -mt-4">
              260m/s
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center col-span-1 w-full max-w-[300px]">
            <Rocket className="w-full h-auto aspect-square md:max-w-[120px] max-w-[80px] text-[#041322]" />
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-lg text-[#041322] font-bebas text-center">
              {t("thrust")}
            </p>
            <p className="lg:text-2xl md:text-xl text-lg text-[#041322] font-bebas text-center -mt-4">
              2600N
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center sm:mx-8 mx-4">
        <div className="flex flex-col gap-0 items-center text-center text-white font-bebas">
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold">
            {t("hot-fire-test")}
          </h1>
          <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl">
            {t("fire-test-subtitle")}
          </h2>
        </div>
        <div className="w-full max-w-3xl flex lg:flex-row flex-col items-stretch gap-2 relative ">
          <Image
            src={fire_test}
            className="h-[400px] w-auto"
            alt="hot-fire-test-team"
          />
          <video
            src="https://7eyx2g907l.ufs.sh/f/sLYGJAi3EKZOsBF3pUi3EKZOkC9TLRwmFy5QpiGUh1sWqSJg"
            className="lg:relative absolute w-[225px] lg:h-[400px] h-[380px] lg:left-auto lg:top-auto lg:translate-0 lg:border-0 lg:p-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-[#041322] p-2"
            controls
            muted
          ></video>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center text-white sm:mx-8 mx-4">
        <h1
          ref={topRef}
          className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold font-bebas"
        >
          {t("explore-rocket")}
        </h1>
        <p className="lg:text-2xl md:text-xl text-lg font-bebas">
          ({t("click-each-part")})
        </p>

        <div className="w-full">
          <div className="flex flex-row items-center gap-0 max-h-[99px] w-full">
            <div
              onClick={() => {
                handleSectionClick("ground");
              }}
              className={cn(
                "aspect-[52/99] flex-grow hover:scale-105 transition-all hover:cursor-pointer outline-2 outline-transparent rounded",
                current == 0 && "outline-white z-10"
              )}
            >
              <Image src={ground} alt="Ground" className="object-contain" />
            </div>
            <div
              onClick={() => {
                handleSectionClick("aerodynamics");
              }}
              className={cn(
                "aspect-[53/99] flex-grow hover:scale-105 transition-all hover:cursor-pointer  outline-2 outline-transparent rounded",
                current == 1 && "outline-white z-10"
              )}
            >
              <Image
                src={aerodynamics}
                alt="Aerodynamics"
                className="object-contain"
              />
            </div>
            <div
              onClick={() => {
                handleSectionClick("propulsion");
              }}
              className={cn(
                "aspect-[74/99] flex-grow hover:scale-105 transition-all hover:cursor-pointer  outline-2 outline-transparent rounded",
                current == 2 && "outline-white z-10"
              )}
            >
              <Image
                src={propulsion}
                alt="Propulsion"
                className="object-contain"
              />
            </div>
            <div
              onClick={() => {
                handleSectionClick("structures");
              }}
              className={cn(
                "aspect-[245/99] flex-grow hover:scale-105 transition-all hover:cursor-pointer  outline-2 outline-transparent rounded",
                current == 3 && "outline-white z-10"
              )}
            >
              <Image
                src={structures}
                alt="Structures"
                className="object-contain"
              />
            </div>
            <div
              onClick={() => {
                handleSectionClick("avionics");
              }}
              className={cn(
                "aspect-[87/99] flex-grow hover:scale-105 transition-all hover:cursor-pointer  outline-2 outline-transparent rounded",
                current == 4 && "outline-white z-10"
              )}
            >
              <Image src={avionics} alt="Avionics" className="object-contain" />
            </div>
            <div
              onClick={() => {
                handleSectionClick("recovery");
              }}
              className={cn(
                "aspect-[224/99] flex-grow hover:scale-105 transition-all hover:cursor-pointer  outline-2 outline-transparent rounded",
                current == 5 && "outline-white z-10"
              )}
            >
              <Image src={recovery} alt="Recovery" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
      {/*CARD HERE*/}
      <Carousel
        ref={bottomRef}
        opts={{ align: "center" }}
        className="w-full max-w-3xl px-2 sm:mx-8 mx-4"
        setApi={setApi}
      >
        <CarouselContent>
          {sections.map((section) => (
            <CarouselItem key={section.id} className="">
              <Card className="p-4 bg-foreground/30 border-none h-full w-full">
                <CardHeader className="flex flex-col items-center">
                  <h1 className="text-white text-center font-bebas text-3xl sm:text-4xl md:text-5xl border-b-2 border-white pb-2">
                    {section.title}
                  </h1>
                  <p className="mt-2 text-white text-center font-arimo text-lg">
                    {section.description}
                  </p>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex flex-col items-stretch w-full max-w-3xl gap-4  sm:mx-8 mx-4">
        <div className="w-full max-w-xs pb-4 border-b-2 border-white mx-auto">
          <h1 className="md:text-6xl sm:text-5xl text-3xl font-bebas text-white text-center w-full">
            {t("invictus")} 2.0
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-0 w-full max-w-3xl">
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bebas text-white text-center w-full">
            {t("project")}{" "}
            <span className="md:text-4xl sm:text-3xl text-2xl">
              {t("invictus")}
            </span>{" "}
            <span>2025</span>
          </h2>
        </div>
        <div className="w-full grid grid-cols-2 items-center justify-center gap-2">
          <Image
            src={invictusCover}
            alt="cover photo"
            width={1080}
            height={1080}
            className="w-full max-w-3xs mx-auto h-auto object-cover"
          />
          <div className="bg-yellow-400 aspect-square w-fit sm:p-6 p-4 rounded-xl flex items-center justify-center rotate-45 relative">
            <div className="absolute border-black border-4 bg-yellow-400 w-8/9 h-8/9 rounded-xl"></div>
            <p className="font-bebas sm:text-3xl text-xl text-black text-center -rotate-45">
              {t("under")} <br />
              {t("construction")}
              <FaTools className="text-black z-10 mx-auto mt-2" />
            </p>
          </div>
        </div>
      </div>
      <Image
        src={invictusBg}
        alt="cover photo"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
        className="w-full h-auto object-cover -z-10 max-h-screen !fixed"
      />
      <div className="w-full object-cover -z-10 h-screen !fixed top-0 bg-[#041322]/75"></div>
    </main>
  );
};
