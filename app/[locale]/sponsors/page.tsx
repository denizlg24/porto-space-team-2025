import { useTranslations } from "next-intl";
import Image from "next/image";
import bg from "@/public/sponsors/Fundo_azul.png";
import invictus from "@/public/project/INVICTUS.svg";
import { Metadata } from "next";
import pluris from "@/public/sponsors/diamond/Logo_Pluris_2.png";
import acl from "@/public/sponsors/gold/acl-group-logotipo.png";
import euroCircuits from "@/public/sponsors/gold/Eurocircuits.png";
import inox from "@/public/sponsors/silver/INOXCOM.svg";
import bluetti from "@/public/sponsors/silver/bluetti-power-logo-vector.svg";
import inesctec from "@/public/sponsors/silver/INESCTECLogotipo_CORPositivo_RGB-1-1024x300.png";
import mauser from "@/public/sponsors/silver/Mauser.svg";
import lojaIndustria from "@/public/sponsors/silver/logo-lojaindustria.png";
import biogerm from "@/public/sponsors/silver/logo-slider-2x-500x600.png";
import edmTech from "@/public/sponsors/bronze/edmtech.svg";
import polymaker from "@/public/sponsors/bronze/Polymaker-.webp";
import moldecar from "@/public/sponsors/bronze/Moldecar.svg";
import cheto from "@/public/sponsors/bronze/chetto.jpg";
import nTop from "@/public/sponsors/software/ntop-ntopology-inc-logo-vector.png";
import inductiva from "@/public/sponsors/software/Inductiva.svg";
import icarus from "@/public/project/ICARUS.svg";
import inegi from "@/public/sponsors/icarus/INEGI_00238_15-G02Q49_00-logo-inegi-slogan.png";
import critical from "@/public/sponsors/icarus/Logo_CSW-995x1024.png";
import esatan from "@/public/sponsors/icarus/ESATANlogo.png";
import ncab from "@/public/sponsors/icarus/image (5).png";
import weg from "@/public/sponsors/icarus/weg.webp";
import demec from "@/public/sponsors/institutional/DeMec.svg";
import deq from "@/public/sponsors/institutional/Dep Quimica.svg";
import fadeup from "@/public/sponsors/institutional/FADEUP.webp";
import demm from "@/public/sponsors/institutional/demm.svg";
import cenfim from "@/public/sponsors/institutional/cenfim.png";

export const metadata: Metadata = {
  title: "Porto Space Team | Sponsors",
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
        <div className="w-full absolute flex sm:flex-row flex-col items-center justify-between p-1 z-10 max-w-7xl gap-4 sm:px-12 px-8">
          <h1 className="uppercase w-full text-left text-white lg:text-8xl sm:text-6xl text-4xl font-bebas drop-shadow-2xl">
            {t("our")} <br className="sm:block hidden" /> {t("sponsors")}
          </h1>
          <h2 className="w-full text-left text-white lg:text-2xl md:text-xl text-sm text font-arimo drop-shadow-2xl">
            {t("sponsor-subtitle")}
          </h2>
        </div>
        <Image
          src={bg}
          alt="cover photo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
          className="w-full h-auto object-cover object-[50%_50%] brightness-50"
        />
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row sm:gap-8 gap-4 py-8 w-full items-center max-w-7xl px-4">
          <div className="grow h-4 bg-feup"></div>
          <div className="flex sm:flex-row flex-col sm:gap-8 gap-4 items-center w-fit">
            <Image
              src={invictus}
              width={1080}
              height={1080}
              alt="Invictus logo"
              className={
                "relative w-full h-auto aspect-square sm:max-w-32 max-w-16 -rotate-48"
              }
            />
          </div>
          <div className="grow h-4 bg-feup"></div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-8 items-center">
        <section className="w-full flex flex-col items-center p-4 sm:gap-16 gap-0">
          <div className="flex flex-col w-full max-w-md text-center mb-4">
            <h2 className="font-bebas md:text-5xl text-3xl text-white uppercase sm:py-4 py-2 from-black to-emerald-700 bg-gradient-to-r rounded-full">
              {t("diamond-sponsors")}
            </h2>
          </div>
          <div className="w-full max-w-xl px-4 mx-auto">
            <Image
              src={pluris}
              alt="pluris logo"
              className="w-full object-contain"
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center p-4 sm:gap-16 gap-0">
          <div className="flex flex-col w-full max-w-md text-center mb-4">
            <h2 className="font-bebas md:text-5xl text-3xl text-white uppercase sm:py-4 py-2 from-black to-yellow-500 bg-gradient-to-r rounded-full">
              {t("gold-sponsors")}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-4 w-full max-w-3xl px-4 items-center justify-center">
            <div className="relative flex justify-center w-full lg:flex-1 max-w-xs h-32">
              <Image src={acl} alt="ACL Logo" fill className="object-contain" />
            </div>
            <div className="relative flex justify-center w-full lg:flex-1 max-w-xs h-32">
              <Image
                src={euroCircuits}
                alt="Euro Circuits logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center p-4 sm:gap-16 gap-0">
          <div className="flex flex-col w-full max-w-md text-center mb-4">
            <h2 className="font-bebas md:text-5xl text-3xl text-white uppercase sm:py-4 py-2 from-black to-gray-600 bg-gradient-to-r rounded-full">
              {t("silver-sponsors")}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-4 w-full max-w-3xl px-4 items-center justify-center">
            <Image
              src={inesctec}
              alt="Inesctec logo"
              className="object-contain col-span-1 w-full h-auto"
            />
            <Image
              src={mauser}
              alt="Mauser logo"
              className="object-contain col-span-1 w-full h-auto"
            />
            <Image
              src={inox}
              alt="Inox logo"
              className="object-contain col-span-1 w-full h-auto lg:-my-24 md:-my-20 sm:-my-8 -my-6"
            />
            <Image
              src={bluetti}
              alt="Bluetti logo"
              className="object-contain col-span-1 w-full h-auto lg:-my-24 md:-my-20 sm:-my-8 -my-6"
            />

            <Image
              src={lojaIndustria}
              alt="Loja Industria logo"
              className="object-contain col-span-1 w-full h-auto lg:-mt-16 md:-mt-12 sm:-mt-8 -mt-6"
            />
            <Image
              src={biogerm}
              alt="Biogerm logo"
              className="object-contain col-span-1 w-full h-auto invert-100 lg:max-w-[180px] md:max-w-[160px] sm:max-w-[140px] max-w-[120px] mx-auto  lg:-mt-16 md:-mt-12 sm:-mt-8 -mt-6"
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center p-4 sm:gap-16 gap-0">
          <div className="flex flex-col w-full max-w-md text-center mb-4">
            <h2 className="font-bebas md:text-5xl text-3xl text-white uppercase sm:py-4 py-2 from-black to-yellow-900 bg-gradient-to-r rounded-full">
              {t("bronze-sponsors")}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-4 w-full max-w-3xl px-4 items-center justify-center">
            <Image
              src={edmTech}
              alt="Edm Tech logo"
              className="object-contain col-span-1 w-full h-auto"
            />
            <Image
              src={polymaker}
              alt="Polymaker logo"
              className="object-contain col-span-1 w-full h-auto lg:max-w-[200px] md:max-w-[180px] sm:max-w-[160px] max-w-[140px] mx-auto"
            />
            <Image
              src={moldecar}
              alt="Moldercar logo"
              className="object-contain col-span-1 w-full h-auto lg:max-w-[200px] md:max-w-[180px] sm:max-w-[160px] max-w-[140px] mx-auto"
            />
            <Image
              src={cheto}
              alt="Cheto logo"
              className="object-contain col-span-1 w-full h-auto lg:max-w-[240px] md:max-w-[220px] sm:max-w-[200px] max-w-[180px] mx-auto"
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center p-4 sm:gap-16 gap-0">
          <div className="flex flex-col w-full max-w-md text-center mb-4">
            <h2 className="font-bebas md:text-5xl text-3xl text-white uppercase sm:py-4 py-2 from-black to-feup bg-gradient-to-r rounded-full">
              {t("software-partners")}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-4 w-full max-w-3xl px-4 items-center justify-center">
            <Image
              src={nTop}
              alt="nTop logo"
              className="object-contain col-span-1 w-full mx-auto lg:max-w-[200px] md:max-w-[180px] sm:max-w-[160px] max-w-[140px] h-auto  lg:-mt-16 sm:-mt-12  -mt-0"
            />
            <Image
              src={inductiva}
              alt="Inductiva logo"
              className="object-contain col-span-1 w-full mx-auto lg:max-w-[200px] md:max-w-[180px] sm:max-w-[160px] max-w-[140px] h-auto  lg:-mt-16 sm:-mt-12 -mt-0"
            />
          </div>
        </section>
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row sm:gap-8 gap-4 py-8 w-full items-center max-w-7xl px-4">
          <div className="grow h-4 bg-feup"></div>
          <div className="flex sm:flex-row flex-col sm:gap-8 gap-4 items-center w-fit">
            <Image
              src={icarus}
              width={1080}
              height={1080}
              alt="Icarus logo"
              className={
                "relative w-full h-auto aspect-square sm:max-w-32 max-w-16"
              }
            />
          </div>
          <div className="grow h-4 bg-feup"></div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-8 items-center pb-12">
        <div className="grid grid-cols-2  w-full max-w-md mx-auto gap-4 items-center justify-center">
          <Image src={inegi} alt="inegi logo" className="col-span-full -mb-6" />
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
      <div className="flex flex-col w-full max-w-xl text-center mb-4 px-4 gap-2">
        <h2 className="font-bebas md:text-6xl text-3xl text-feup uppercase sm:py-4 py-2">
          {t("institutional-partners")}
        </h2>
      </div>
      <div className="flex flex-col gap-12 items-center w-full px-4 mb-24">
        <div className="grid grid-cols-3 w-full max-w-3xl mx-auto gap-4 items-center justify-center">
          <Image
            src={demec}
            alt="DeMec logo"
            className="object-contain col-span-1 w-full mx-auto  lg:max-w-[160px] md:max-w-[140px] sm:max-w-[120px] max-w-[100px] h-auto"
          />
          <Image
            src={deq}
            alt="DeEQ logo"
            className="object-contain col-span-1 w-full mx-auto lg:max-w-[200px] md:max-w-[180px] sm:max-w-[160px] max-w-[140px] h-auto"
          />
          <Image
            src={fadeup}
            alt="FADEUP logo"
            className="object-contain col-span-1 w-full mx-auto lg:max-w-[200px] md:max-w-[180px] sm:max-w-[160px] max-w-[140px] h-auto"
          />
        </div>
        <div className="grid grid-cols-2 w-full max-w-xl mx-auto gap-4">
          <Image
            src={demm}
            alt="DeEmm logo"
            className="object-contain col-span-1 w-full mx-auto lg:max-w-[160px] md:max-w-[140px] sm:max-w-[120px] max-w-[100px] h-auto"
          />
          <Image
            src={cenfim}
            alt="nTop logo"
            className="object-contain col-span-1 w-full mx-auto lg:max-w-[200px] md:max-w-[180px] sm:max-w-[160px] max-w-[140px] h-auto"
          />
        </div>
      </div>
    </main>
  );
}
