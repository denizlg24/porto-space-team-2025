import { useTranslations } from "next-intl";
import Image from "next/image";
import bg from "@/public/about/Fundo_azul.png";
import { Metadata } from "next";
import team from "@/public/about/2025.jpg";
import teamInvictus from "@/public/about/invictus.jpg";
import teamIcarus from "@/public/about/IMG_3744 (1).jpg";
import teamEuroc from "@/public/about/PST_EuRoC.jpg";
import team2024 from "@/public/about/2024.jpg";
import team2023 from "@/public/about/2023.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata: Metadata = {
  title: "Porto Space Team | About",
  description:
    "Discover Porto Space Team, a student-led aerospace association at FEUP, pioneering hybrid-propellant rocket development and space research in Portugal.",
  keywords: [
    "Porto Space Team",
    "FEUP aerospace students",
    "hybrid rocket Portugal",
    "student rocketry",
    "aerospace engineering Porto",
  ],
};

export default function Page() {
  const t = useTranslations("common");
  return (
    <main className="w-full flex flex-col items-center">
      <div className="md:h-[calc(66vh)] h-[calc(33vh)] min-h-[375px] md:min-h-[550px] flex items-center justify-center relative w-full">
        <div className="w-full absolute flex flex-col items-center justify-center p-1 z-10 max-w-7xl gap-4 sm:px-12 px-8">
          <h1 className="uppercase w-full text-center text-white lg:text-8xl sm:text-6xl text-4xl font-bebas drop-shadow-2xl">
            {t("about-us")}
          </h1>
        </div>
        <Image
          src={bg}
          alt="cover photo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
          className="w-full h-auto object-cover object-[50%_40%] brightness-50"
        />
      </div>
      <div className="w-full flex flex-col gap-4 max-w-4xl mx-auto px-4 md:py-12 py-6">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-feup font-bold lg:text-7xl md:text-6xl sm:text-5xl text-3xl font-bebas">
            {t("who-are-we")}
          </h1>
          <p className="font-arimo text-black lg:text-lg md:text-base sm:text-sm text-xs">
            {t("about-us-p1-full")}
          </p>
          <p className="font-arimo text-black lg:text-lg md:text-base sm:text-sm text-xs">
            {t("about-us-p2-full")}
          </p>
          <p className="font-arimo text-black lg:text-lg md:text-base sm:text-sm text-xs">
            {t("about-us-p3-full")}
          </p>
        </div>
        <Image
          src={team}
          alt="current team"
          className="object-fit w-full rounded"
        />
        <div className="flex flex-col gap-1 w-full">
          <p className="font-arimo text-black lg:text-lg md:text-base sm:text-sm text-xs">
            {t("about-us-p4-full")}
          </p>
          <p className="font-arimo text-black lg:text-lg md:text-base sm:text-sm text-xs">
            {t("about-us-p5-full")}
          </p>
        </div>
        <h1 className="text-feup w-fit mx-auto font-bold lg:text-7xl md:text-6xl sm:text-5xl text-3xl font-bebas pb-2 border-b-2 border-b-feup mt-6 px-6 text-center">
          {t("our-history")}
        </h1>
        <div className="flex flex-col gap-2 w-full mt-6">
          <h2 className="text-feup lg:text-5xl md:text-4xl text-3xl font-bebas font-semibold mr-auto text-left">
            {t("team")}
          </h2>
          <h3 className="text-black lg:text-3xl md:text-2xl text-xl font-bebas font-semibold mr-auto text-left">
            2025
          </h3>
          <p className="text-black font-arimo lg:text-lg md:text-base sm:text-sm text-xs max-w-lg">
            {t("team-2025")}
          </p>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="flex flex-col items-center gap-2 w-full">
                <Image
                  src={team}
                  alt="2025 team"
                  className="w-full h-auto object-cover rounded"
                />
              </CarouselItem>
              <CarouselItem className="flex flex-col-reverse items-center gap-2 w-full">
                <h1 className="text-center font-bebas font-semibold text-black lg:text-4xl md:text-3xl sm:text-2xl text-xl">
                  INVICTUS
                </h1>
                <Image
                  src={teamInvictus}
                  alt="2025 team"
                  className="w-full h-auto object-cover rounded"
                />
              </CarouselItem>
              <CarouselItem className="flex flex-col-reverse items-center gap-2 w-full">
                <h1 className="text-center font-bebas font-semibold text-black lg:text-4xl md:text-3xl sm:text-2xl text-xl">
                  ICARUS
                </h1>
                <Image
                  src={teamIcarus}
                  alt="2025 team"
                  className="w-full h-auto object-cover rounded"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className="right-2 text-feup" />
            <CarouselPrevious className="left-2 text-feup" />
          </Carousel>
        </div>
        <div className="flex flex-col gap-2 w-full mt-6">
          <h2 className="text-feup lg:text-5xl md:text-4xl text-3xl font-bebas font-semibold ml-auto text-right">
            {t("team")}
          </h2>
          <h3 className="text-black lg:text-3xl md:text-2xl text-xl font-bebas font-semibold ml-auto text-right">
            2024
          </h3>
          <p className="text-black font-arimo lg:text-lg md:text-base sm:text-sm text-xs max-w-lg text-right ml-auto">
            {t("team-2024")}
          </p>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={team2024}
                  alt="2024 team"
                  className="w-full h-auto object-cover rounded"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={teamEuroc}
                  alt="2024 team"
                  className="w-full h-auto object-cover rounded"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselNext className="right-2 text-feup" />
            <CarouselPrevious className="left-2 text-feup" />
          </Carousel>
        </div>
        <div className="flex flex-col gap-2 w-full mt-6">
          <h2 className="text-feup lg:text-5xl md:text-4xl text-3xl font-bebas font-semibold mr-auto text-left">
            {t("team")}
          </h2>
          <h3 className="text-black lg:text-3xl md:text-2xl text-xl font-bebas font-semibold mr-auto text-left">
            2023
          </h3>
          <p className="text-black font-arimo lg:text-lg md:text-base sm:text-sm text-xs max-w-lg">
            {t("team-2023")}
          </p>
          <Image
            src={team2023}
            alt="2023 team"
            className="w-full h-auto object-cover rounded"
          />
        </div>
      </div>
    </main>
  );
}
