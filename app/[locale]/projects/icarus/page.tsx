import { useTranslations } from "next-intl";
import bg from "@/public/ICARUS.jpg";
import icarus from "@/public/project/ICARUS.svg";
import icarus_build from "@/public/project/icarus-build.webp";
import icarusTeam from "@/public/project/icarus-team.jpg";
import Image from "next/image";

import inegi from "@/public/sponsors/icarus/INEGI_00238_15-G02Q49_00-logo-inegi-slogan.png";
import critical from "@/public/sponsors/icarus/Logo_CSW-995x1024.png";
import esatan from "@/public/sponsors/icarus/ESATANlogo.png";
import ncab from "@/public/sponsors/icarus/image (5).png";
import weg from "@/public/sponsors/icarus/weg.webp";
import { IcarusScroll } from "./IcarusCardScroller";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations({
    locale: (await params).locale,
    namespace: "metadata",
  });

  return {
    title: t("icarus-title"),
    description: t("icarus-description"),
    keywords: t("icarus-keywords").split(","),
  };
}

export default function Page() {
  const t = useTranslations("common");
  return (
    <main className="relative flex flex-col items-center sm:gap-16 gap-8 py-12 w-full outline-0! ring-0! px-4 overflow-x-hidden">
      <h1 className="sm:mt-32 mt-16 w-full max-w-xs pb-4 text-center text-white font-rajdhani font-bold lg:text-7xl md:text-6xl sm:text-5xl text-4xl border-b-2 border-feup">
        {t("icarus")}
      </h1>
      <div className="sm:grid flex flex-col-reverse grid-cols-2 items-stretch justify-center w-full max-w-3xl gap-8 sm:px-12 px-6">
        <div className="flex flex-col gap-3 sm:items-start sm:text-left text-center sm:ml-auto items-center lg:text-3xl md:text-2xl text-xl col-span-1 text-white font-poppins font-bold my-auto w-full">
          <h2>
            {t("icarus-title-1")}
            <br />{" "}
            <span className="text-feup flex flex-row items-center gap-2 sm:justify-start justify-center">
              {t("icarus-title-2")}
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
      <div className="flex flex-col font-rajdhani w-full max-w-3xl gap-4 sm:px-12 px-6">
        <p className="lg:text-3xl md:text-2xl text-xl text-white font-bold">
          {t("project")} <span className="text-feup">{t("icarus")}</span> 2025
        </p>
        <p className="font-inter lg:text-lg md:text-base sm:text-sm text-xs text-white">
          {t("icarus-full-p1")}
        </p>
        <p className="font-inter lg:text-lg md:text-base sm:text-sm text-xs text-white">
          {t("icarus-full-p2")}
        </p>
        <p className="font-inter lg:text-lg md:text-base sm:text-sm text-xs text-white">
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
      <IcarusScroll />
      <div className="w-full p-4 bg-white pb-12">
        <div className="flex flex-col w-full max-w-md text-center gap-1 mx-auto">
          <h1 className="font-rajdhani font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-feup uppercase">
            {t("sponsors")}
          </h1>
          <div className="w-full bg-feup h-1"></div>
          <div className="grid grid-cols-2  w-full gap-4 items-center justify-center">
            <a
              href="https://www.inegi.pt/pt"
              className="col-span-full"
              target="_blank"
            >
              <Image
                src={inegi}
                alt="inegi logo"
                className="col-span-full -mb-6"
              />
            </a>
            <a href="https://criticalsoftware.com/en" target="_blank">
              <Image
                src={critical}
                alt="critical logo"
                className="col-span-1 max-w-[150px] mx-auto"
              />
            </a>
            <a href="https://www.ncabgroup.com" target="_blank">
              <Image
                src={ncab}
                alt="ncab logo"
                className="col-span-1 max-w-[150px] mx-auto"
              />
            </a>
            <a href="https://www.weg.net/institutional/US/en/" target="_blank">
              <Image
                src={weg}
                alt="weg logo"
                className="col-span-1 max-w-[100px] mx-auto"
              />
            </a>
            <a href="https://www.esatan-tms.com" target="_blank">
              <Image src={esatan} alt="esatan logo" className="col-span-1 " />
            </a>
          </div>
        </div>
      </div>
      <Image
        src={bg}
        alt="cover photo"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
        className="w-full h-full object-cover -z-10 max-h-screen fixed! bottom-0!"
      />
      <div className="w-full object-cover -z-10 h-full bg-[#041322]/75 fixed! bottom-0!"></div>
    </main>
  );
}
