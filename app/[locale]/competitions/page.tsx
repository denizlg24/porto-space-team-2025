import { useTranslations } from "next-intl";
import Image from "next/image";
import bg from "@/public/competitons/Fundo_azul.png";
import bgCompetitions from "@/public/competitons/Design sem nome (17).png";
import eurocLogo from "@/public/competitons/euroc_logo.webp";
import sidePicture1 from "@/public/competitons/Imagem WhatsApp 2025-04-05 às 00.37.11_a1ac6eab.jpg";
import sidePicture2 from "@/public/competitons/1000007515 (1).jpg";
import cubesat from "@/public/competitons/cubesat.png";
import cubesatBg from "@/public/competitons/cubesat fundo.png";
import team from "@/public/competitons/1.jpg";
import team2 from "@/public/competitons/2.jpg";
import team3 from "@/public/competitons/3.jpg";
import team4 from "@/public/competitons/4.jpg";
import team5 from "@/public/competitons/5.jpg";
import { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { ArrowUpRightFromSquare } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata: Metadata = {
  title: "Porto Space Team | Competitions",
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
    <main className="w-full flex flex-col items-center md:gap-8 gap-6">
      <div className="md:h-[calc(66vh)] h-[calc(33vh)] min-h-[375px] md:min-h-[550px] flex items-center justify-center relative w-full">
        <div className="w-full absolute flex flex-col items-center justify-center p-1 z-10 max-w-7xl gap-4 sm:px-12 px-8">
          <h1 className="uppercase w-full text-center text-white lg:text-8xl sm:text-6xl text-4xl font-bebas drop-shadow-2xl">
            {t("nav-competitions")}
          </h1>
        </div>
        <Image
          src={bg}
          alt="cover photo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
          className="w-full h-auto object-cover object-[50%_25%] brightness-50"
        />
      </div>
      <div className="flex flex-col items-center justify-start sm:p-8 p-2 relative w-full gap-8">
        <div className="w-full z-10 max-w-7xl gap-4 px-4">
          <h1 className="uppercase w-full max-w-md mx-auto text-center text-white lg:text-8xl sm:text-6xl text-4xl font-bebas pb-2 border-b-2 border-b-white">
            EUROC
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 w-full max-w-5xl mx-auto gap-4 rounded-lg bg-black/50 sm:p-6 p-4 z-10 items-center">
          <div className="w-full flex flex-col gap-4 col-span-1 text-left text-white font-arimo font-semibold lg:text-xl md:text-lg sm:text-base text-sm">
            <p>{t("euroc-p1")}</p>
            <p>{t("euroc-p2")}</p>
          </div>
          <div className="w-full col-span-1 flex flex-col items-center gap-4 mx-auto">
            <Image
              src={eurocLogo}
              alt="euroc logo"
              className="w-full h-auto sm:max-w-[250px] max-w-[150px] object-contain mx-auto"
            />
            <Button
              asChild
              variant={"outline"}
              className="bg-transparent text-white uppercase"
            >
              <Link href={"https://euroc.pt"} target="_blank">
                {t("euroc-website")}
                <ArrowUpRightFromSquare />
              </Link>
            </Button>
          </div>
        </div>
        <Image
          src={bgCompetitions}
          alt="cover photo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
          className="w-full h-auto object-cover object-[50%_25%] brightness-50"
        />
      </div>
      <div className="w-full flex flex-col gap-8 px-4 pb-12">
        <div className="grid sm:grid-cols-2 grid-cols-1 w-full max-w-5xl mx-auto gap-6">
          <div className="col-span-1 w-full flex flex-col gap-4 text-left">
            <h2 className="font-bebas font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-feup">
              EUROC 23&apos;
            </h2>
            <p className="font-arimo text-black lg:text-xl md:text-lg sm:text-base text-sm">
              {t("euroc-23-p1")}
            </p>
            <p className="font-arimo text-black lg:text-xl md:text-lg sm:text-base text-sm">
              {t("euroc-23-p2")}
            </p>
          </div>
          <div className="col-span-1 w-full">
            <Image
              src={sidePicture1}
              className="w-full h-full object-cover object-[100%_0%] rounded"
              alt="side picture 1"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 w-full max-w-5xl mx-auto gap-6 items-center">
          <div className="col-span-1 w-full">
            <Image
              src={sidePicture2}
              className="w-full h-auto max-h-[500px] object-cover object-[50%_80%] rounded"
              alt="side picture 1"
            />
          </div>
          <div className="col-span-1 w-full flex flex-col gap-4 text-left">
            <h2 className="font-bebas font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-feup">
              EUROC 24&apos;
            </h2>
            <p className="font-arimo text-black lg:text-xl md:text-lg sm:text-base text-sm">
              {t("euroc-24-p1")}
            </p>
            <p className="font-arimo text-black lg:text-xl md:text-lg sm:text-base text-sm">
              {t("euroc-24-p2")}
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 w-full max-w-5xl mx-auto gap-6">
          <div className="col-span-1 w-full flex flex-col gap-4 text-left">
            <h2 className="font-bebas font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-feup">
              EUROC 25&apos;
            </h2>
            <p className="font-arimo text-black lg:text-xl md:text-lg sm:text-base text-sm">
              {t("coming-soon")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start sm:p-8 p-2 relative w-full gap-8">
        <div className="w-full z-10 max-w-7xl gap-4 px-4">
          <h1 className="uppercase w-full max-w-md mx-auto text-center text-white lg:text-7xl sm:text-6xl text-4xl font-bebas pb-2 border-b-2 border-b-white">
            CUBESAT PORTUGAL
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 w-full max-w-5xl mx-auto gap-4 rounded-lg bg-black/50 sm:p-6 p-4 z-10 items-center">
          <div className="w-full col-span-1 flex flex-col items-center gap-4 mx-auto">
            <Image
              src={cubesat}
              alt="euroc logo"
              className="w-full h-auto sm:max-w-[250px] max-w-[150px] object-contain mx-auto"
            />
            <Button
              asChild
              variant={"outline"}
              className="bg-transparent text-white uppercase"
            >
              <Link
                href={"https://ptspace.pt/pt/cubesat-portugal"}
                target="_blank"
              >
                {t("cubesat-website")}
                <ArrowUpRightFromSquare />
              </Link>
            </Button>
          </div>
          <div className="w-full flex flex-col gap-4 col-span-1 text-left text-white font-arimo font-semibold lg:text-xl md:text-lg sm:text-base text-sm">
            <p>{t("cubesat-p1")}</p>
            <p>{t("cubesat-p2")}</p>
          </div>
        </div>
        <Image
          src={cubesatBg}
          alt="cover photo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
          className="w-full h-auto object-cover object-[50%_15%] brightness-50"
        />
      </div>
      <div className="flex flex-col gap-2 w-full max-w-5xl mx-auto pb-12 px-4">
        <h1 className="text-feup font-bold lg:text-7xl md:text-6xl sm:text-5xl text-3xl font-bebas">
          BOOTCAMP 2025
        </h1>
        <p className="font-arimo text-black lg:text-lg md:text-base sm:text-sm text-xs">
          {t("bootcamp-p1")}
        </p>
        <p className="font-arimo text-black lg:text-lg md:text-base sm:text-sm text-xs">
          {t("bootcamp-p2")}
        </p>
        <p className="font-arimo text-black lg:text-lg md:text-base sm:text-sm text-xs">
          {t("bootcamp-p3")}
        </p>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="flex flex-col items-center gap-2 w-full">
              <Image
                src={team}
                alt="team"
                className="w-full h-auto object-cover rounded"
              />
            </CarouselItem>
            <CarouselItem className="flex flex-col-reverse items-center gap-2 w-full">
              <Image
                src={team2}
                alt="team 2"
                className="w-full h-auto object-cover rounded"
              />
            </CarouselItem>
            <CarouselItem className="flex flex-col-reverse items-center gap-2 w-full">
              <Image
                src={team3}
                alt="team 2"
                className="w-full h-auto object-cover rounded"
              />
            </CarouselItem>
            <CarouselItem className="flex flex-col-reverse items-center gap-2 w-full">
              <Image
                src={team4}
                alt="team 2"
                className="w-full h-auto object-cover rounded"
              />
            </CarouselItem>
            <CarouselItem className="flex flex-col-reverse items-center gap-2 w-full">
              <Image
                src={team5}
                alt="team 2"
                className="w-full h-auto object-cover rounded"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className="right-2 text-feup" />
          <CarouselPrevious className="left-2 text-feup" />
        </Carousel>
      </div>
    </main>
  );
}
