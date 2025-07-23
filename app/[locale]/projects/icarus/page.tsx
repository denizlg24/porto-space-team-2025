import { useTranslations } from "next-intl";
import bg from "@/public/ICARUS.jpg";
import icarus from "@/public/project/ICARUS.svg";
import icarus_build from "@/public/project/icarus-build.webp";
import icarusTeam from "@/public/project/icarus-team.jpg";
import Image from "next/image";
import { Card, CardHeader } from "@/components/ui/card";

import inegi from "@/public/sponsors/icarus/INEGI_00238_15-G02Q49_00-logo-inegi-slogan.png";
import critical from "@/public/sponsors/icarus/Logo_CSW-995x1024.png";
import esatan from "@/public/sponsors/icarus/ESATANlogo.png";
import ncab from "@/public/sponsors/icarus/image (5).png";
import weg from "@/public/sponsors/icarus/weg.webp";
import { CardScroller } from "./CardScroller";

export default function Page() {
  const t = useTranslations("common");
  return (
    <main className="relative flex flex-col items-center gap-16 pt-12 w-full outline-0! ring-0!">
      <h1 className="sm:mt-32 mt-16 w-full max-w-xs pb-4 text-center text-white font-bebas font-semibold lg:text-7xl md:text-6xl sm:text-5xl text-4xl border-b-2 border-feup">
        {t("icarus")}
      </h1>
      <div className="sm:grid flex flex-col-reverse grid-cols-2 items-stretch justify-center w-full max-w-3xl gap-8 sm:px-12 px-6">
        <div className="flex flex-col gap-3 sm:items-start sm:text-left text-center sm:ml-auto items-center sm:text-5xl text-4xl col-span-1 text-white font-bebas my-auto w-full">
          <h2>
            {t("icarus-title-1")}
            <br />{" "}
            <span className="text-feup flex flex-row items-center gap-2 sm:justify-start justify-center">
              {t("icarus-title-2")}
              <span className=" w-12 h-2 bg-white"></span>
            </span>
          </h2>
          <p>{t("icarus-title-3")}</p>
          <p>{t("icarus-title-4")}</p>
          <p>{t("icarus-title-5")}</p>
        </div>
        <div className="w-full my-auto col-span-1 aspect-square h-auto relative sm:max-w-xs max-w-3xs sm:mx-0 mx-auto">
          <Image
            src={icarus}
            alt="cover photo"
            fill
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col font-bebas w-full max-w-3xl gap-4 sm:px-12 px-6">
        <p className="sm:text-4xl text-3xl text-white">
          {t("project")} <span className="text-feup">{t("icarus")}</span> 2025
        </p>
        <p className="font-arimo sm:text-lg text-base text-white">
          {t("icarus-full-p1")}
        </p>
        <p className="font-arimo sm:text-lg text-base text-white">
          {t("icarus-full-p2")}
        </p>
        <p className="font-arimo sm:text-lg text-base text-white">
          {t("icarus-full-p3")}
        </p>
        <Image
          src={icarusTeam}
          alt="icarus team"
          className="w-full max-w-3xl border-4 border-[#0c2946] p-2"
        />
      </div>
      <div className="flex flex-col gap-2 w-full max-w-3xl sm:px-12 px-6">
        <Image
          src={icarus_build}
          width={799}
          height={651}
          alt="icarus build"
          className="w-full"
        />
        <p className="pt-2 border-t-2 border-white mr-auto font-arimo font-semibold text-white w-full max-w-xs">
          {t("icarus-model")}
        </p>
      </div>
      <CardScroller>
        {[
          <Card
            key={t("telemetry")}
            className="p-4 w-full max-w-3xl bg-feup/50 border-none card-scroll-item h-fit!"
          >
            <CardHeader className="flex flex-col items-center px-0">
              <h1 className="text-white text-center font-bebas text-2xl sm:text-3xl md:text-4xl border-b-2 border-white sm:pb-2 pb-0 px-4">
                {t("telemetry")}
              </h1>
              <p className="mt-2 text-white font-arimo text-left lg:text-lg md:text-base sm:text-sm text-xs">
                {t("telemetry-desc")}
              </p>
            </CardHeader>
          </Card>,

          <Card
            key={t("attitude")}
            className="p-4 w-full max-w-3xl bg-feup/50 border-none card-scroll-item h-fit!"
          >
            <CardHeader className="flex flex-col items-center px-0">
              <h1 className="text-white text-center font-bebas text-2xl sm:text-3xl md:text-4xl border-b-2 border-white sm:pb-2 pb-0 px-4">
                {t("attitude")}
              </h1>
              <p className="mt-2 text-white font-arimo text-left lg:text-lg md:text-base sm:text-sm text-xs">
                {t("attitude-desc")}
              </p>
            </CardHeader>
          </Card>,

          <Card
            key={t("payload")}
            className="p-4 w-full max-w-3xl bg-feup/50 border-none card-scroll-item h-fit!"
          >
            <CardHeader className="flex flex-col items-center px-0">
              <h1 className="text-white text-center font-bebas text-2xl sm:text-3xl md:text-4xl border-b-2 border-white sm:pb-2 pb-0 px-4">
                {t("payload")}
              </h1>
              <p className="mt-2 text-white font-arimo text-left lg:text-lg md:text-base sm:text-sm text-xs">
                {t("payload-desc")}
              </p>
            </CardHeader>
          </Card>,

          <Card
            key={t("structures-thermal")}
            className="p-4 w-full max-w-3xl bg-feup/50 border-none card-scroll-item h-fit!"
          >
            <CardHeader className="flex flex-col items-center px-0">
              <h1 className="text-white text-center font-bebas text-2xl sm:text-3xl md:text-4xl border-b-2 border-white sm:pb-2 pb-0 px-4">
                {t("structures-thermal")}
              </h1>
              <p className="mt-2 text-white font-arimo text-left lg:text-lg md:text-base sm:text-sm text-xs">
                {t("structures-thermal-desc")}
              </p>
            </CardHeader>
          </Card>,

          <Card
            key={t("computer")}
            className="p-4 w-full max-w-3xl bg-feup/50 border-none card-scroll-item h-fit!"
          >
            <CardHeader className="flex flex-col items-center px-0">
              <h1 className="text-white text-center font-bebas text-2xl sm:text-3xl md:text-4xl border-b-2 border-white sm:pb-2 pb-0 px-4">
                {t("computer")}
              </h1>
              <p className="mt-2 text-white font-arimo text-left lg:text-lg md:text-base sm:text-sm text-xs">
                {t("computer-desc")}
              </p>
            </CardHeader>
          </Card>,

          <Card
            key={t("electrical")}
            className="p-4 w-full max-w-3xl bg-feup/50 border-none card-scroll-item h-fit!"
          >
            <CardHeader className="flex flex-col items-center px-0">
              <h1 className="text-white text-center font-bebas text-2xl sm:text-3xl md:text-4xl border-b-2 border-white sm:pb-2 pb-0 px-4">
                {t("electrical")}
              </h1>
              <p className="mt-2 text-white font-arimo lg:text-lg md:text-base sm:text-sm text-xs text-left">
                {t("electrical-desc")}
              </p>
            </CardHeader>
          </Card>,
        ]}
      </CardScroller>
      <div className="w-full p-4 bg-white pb-12">
        <div className="flex flex-col w-full max-w-md text-center gap-1 mx-auto">
          <h1 className="font-bebas md:text-7xl text-5xl text-feup uppercase">
            {t("sponsors")}
          </h1>
          <div className="w-full bg-feup h-1"></div>
          <div className="grid grid-cols-2  w-full gap-4 items-center justify-center">
            <Image
              src={inegi}
              alt="inegi logo"
              className="col-span-full -mb-6"
            />
            <Image
              src={critical}
              alt="critical logo"
              className="col-span-1 max-w-[150px] mx-auto"
            />
            <Image
              src={ncab}
              alt="ncab logo"
              className="col-span-1 max-w-[150px] mx-auto"
            />
            <Image
              src={weg}
              alt="weg logo"
              className="col-span-1 max-w-[100px] mx-auto"
            />
            <Image src={esatan} alt="esatan logo" className="col-span-1 " />
          </div>
        </div>
      </div>
      <Image
        src={bg}
        alt="cover photo"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
        className="w-full h-auto object-cover -z-10 max-h-screen !fixed"
      />
      <div className="w-full object-cover -z-10 h-screen !fixed top-0 bg-[#041322]/75"></div>
    </main>
  );
}
