"use client";
import { useTranslations } from "next-intl";
import invictusBg from "@/public/project/02153633999291.jpg";
import Image from "next/image";
import invictus from "@/public/project/INVICTUS.svg";
import invictus2025 from "@/public/project/EuRoc 25' 2.png";
import invictusRocketHorizontal from "@/public/project/invictus-rocket-horizontal.png";
import invictusCover from "@/public/project/invictus-under-cover.webp";
import {
  ChevronsUpIcon,
  Rocket,
  RulerDimensionLine,
  Weight,
} from "lucide-react";
import fire_test from "@/public/project/Imagem WhatsApp 2024-09-28 às 12.24.45_b5748d0d.jpg";
import { FaTools } from "react-icons/fa";
import { RocketScroll } from "./InvictusRocketDesc";
export const InvictusDesc = () => {
  const t = useTranslations("common");
  return (
    <main className="relative flex flex-col items-center sm:gap-16 gap-8 py-12 w-full outline-0! ring-0! px-4">
      <h1 className="sm:mt-24 mt-16 w-full max-w-xs pb-4 text-center text-white font-rajdhani font-bold md:text-6xl sm:text-5xl text-4xl border-b-2">
        {t("invictus")} I
      </h1>
      <div className="flex sm:flex-row flex-col-reverse justify-between sm:gap-6 gap-4 items-center w-full max-w-xl">
        <div className="flex sm:flex-col flex-row justify-center gap-2 sm:text-left text-center w-full max-w-lg text-white font-rajdhani font-semibold">
          <p className="sm:text-5xl text-xl">{t("project")}</p>
          <p className="sm:text-6xl text-xl">{t("invictus")}</p>
          <p className="sm:text-5xl text-xl">2024</p>
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

      <h2 className="w-full max-w-3xl text-left text-white font-arimo lg:text-2xl md:text-xl sm:text-lg text-base">
        {t("invictus-subtitle")}
      </h2>
      <Image
        src={invictusRocketHorizontal}
        width={686}
        height={206}
        alt="Invictus rocket"
        className={"w-full max-w-3xl object-contain -mt-12"}
      />
      <div className="w-full lg:max-w-7xl p-2 sm:py-2 py-4 flex items-center justify-center sm:border-4 border-2 rounded-xl">
        <div className="w-full sm:flex flex-row grid grid-cols-2 gap-2 justify-between text-white">
          <div className="flex flex-col gap-2 items-center col-span-1 w-full max-w-[300px]">
            <RulerDimensionLine className="w-full h-auto aspect-square md:max-w-[100px] sm:max-w-[60px] max-w-[45px]" />
            <p className="lg:text-3xl md:text-2xl sm:text-xl text-sm font-rajdhani font-semibold text-center">
              {t("length")}
            </p>
            <p className="lg:text-xl md:text-lg text-xs font-inter font-semibold text-center -mt-2">
              4.3m
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center col-span-1 w-full max-w-[300px]">
            <Weight className="w-full h-auto aspect-square md:max-w-[100px] sm:max-w-[60px] max-w-[45px]" />
            <p className="lg:text-3xl md:text-2xl sm:text-xl text-sm font-rajdhani font-semibold text-center">
              {t("mass")}
            </p>
            <p className="lg:text-xl md:text-lg text-xs font-inter font-semibold text-center -mt-2">
              54,1kg
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center col-span-1 w-full max-w-[300px]">
            <ChevronsUpIcon className="w-full h-auto aspect-square md:max-w-[100px] sm:max-w-[60px] max-w-[45px]" />
            <p className="lg:text-3xl md:text-2xl sm:text-xl text-sm font-rajdhani font-semibold text-center">
              {t("max-velocity")}
            </p>
            <p className="lg:text-xl md:text-lg text-xs font-inter font-semibold text-center -mt-2">
              260m/s
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center col-span-1 w-full max-w-[300px]">
            <Rocket className="w-full h-auto aspect-square md:max-w-[100px] sm:max-w-[60px] max-w-[45px]" />
            <p className="lg:text-3xl md:text-2xl sm:text-xl text-sm font-rajdhani font-semibold text-center">
              {t("thrust")}
            </p>
            <p className="lg:text-xl md:text-lg text-xs font-inter font-semibold text-center -mt-2">
              2600N
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-0 items-center text-center text-white font-rajdhani">
          <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold">
            {t("hot-fire-test")}
          </h1>
          <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-poppins font-normal">
            {t("fire-test-subtitle")}
          </h2>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full max-w-3xl flex lg:flex-row flex-col items-stretch gap-2 relative ">
            <Image
              src={fire_test}
              className="h-[400px] w-auto object-cover"
              alt="hot-fire-test-team"
            />
            <video
              src="https://7eyx2g907l.ufs.sh/f/sLYGJAi3EKZOsBF3pUi3EKZOkC9TLRwmFy5QpiGUh1sWqSJg"
              className="lg:relative absolute w-[225px] lg:h-[400px] h-[380px] lg:left-auto lg:top-auto lg:translate-0 lg:border-0 lg:p-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-[#041322] p-2"
              controls
              muted
            ></video>
          </div>
          <div className="lg:w-[833px] w-full lg:max-w-full max-w-3xl h-auto aspect-video">
            <video
              src="https://7eyx2g907l.ufs.sh/f/sLYGJAi3EKZOcb0ipMf2plCGHOmUxBdfT5X0ZYKsSikRhDo9"
              className="w-full  h-auto aspect-video"
              controls
              muted
            ></video>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-stretch w-full max-w-3xl gap-4 ">
        <div className="w-full max-w-sm pb-4 border-b-2 border-white mx-auto">
          <h1 className="font-rajdhani font-bold md:text-6xl sm:text-5xl text-4xl text-white text-center w-full">
            {t("invictus")} II
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-0 w-full max-w-3xl">
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-poppins text-white text-center w-full">
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

          <p className="font-rajdhani font-bold sm:text-3xl text-xl text-white text-center">
            {t("under")} <br />
            {t("construction")}
            <FaTools className="text-white z-10 mx-auto mt-2" />
          </p>
        </div>
      </div>
      <h1 className="sm:mt-24 mt-16 w-full max-w-xs pb-4 text-center text-white font-rajdhani font-bold md:text-6xl sm:text-5xl text-4xl border-b-2">
        {t("invictus")}
      </h1>
      <div className="flex sm:flex-row flex-col-reverse justify-between sm:gap-6 gap-4 items-center w-full max-w-xl">
        <div className="flex sm:flex-col flex-row justify-center gap-2 sm:text-left text-center w-full max-w-lg text-white font-rajdhani font-semibold">
          <p className="sm:text-5xl text-xl">{t("project")}</p>
          <p className="sm:text-6xl text-xl">{t("invictus")}</p>
          <p className="sm:text-5xl text-xl">2025</p>
        </div>
        <Image
          src={invictus2025}
          width={1080}
          height={1080}
          alt="Invictus logo"
          className={
            "relative w-full h-auto aspect-square sm:max-w-48 max-w-24"
          }
        />
      </div>
      <div className="flex flex-col gap-2 w-full max-w-5xl">
        <p className="w-full max-w-5xl text-left text-white font-arimo lg:text-xl md:text-lg sm:text-base text-sm">
          {t("invictus-2-p-1")}
        </p>
        <p className="w-full max-w-5xl text-left text-white font-arimo lg:text-xl md:text-lg sm:text-base text-sm">
          {t("invictus-2-p-2")}
        </p>
        <p className="w-full max-w-5xl text-left text-white font-arimo lg:text-xl md:text-lg sm:text-base text-sm">
          {t("invictus-2-p-3")}
        </p>
      </div>
      <RocketScroll />
      <Image
        src={invictusBg}
        alt="cover photo"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
        className="w-full h-full object-fill -z-10 max-h-screen fixed! bottom-0!"
      />
      <div className="w-full object-cover -z-10 h-full bg-[#041322]/75 fixed! bottom-0!"></div>
    </main>
  );
};
