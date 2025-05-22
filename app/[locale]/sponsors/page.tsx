import { useTranslations } from "next-intl";
import Image from "next/image";
import bg from "@/public/sponsors/Fundo_azul.png";
import invictus from "@/public/project/INVICTUS.svg";
import { Metadata } from "next";

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
      <div className="md:h-[calc(66vh)] h-[calc(33vh)] lg:h-screen min-h-[375px] md:min-h-[550px] lg:min-h-screen flex items-center justify-center relative w-full">
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
          className="w-full h-auto object-cover object-[0%_75%] brightness-50"
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
            <h1 className="sm:block hidden text-feup sm:text-6xl text-3xl font-bebas w-full">
              INVICTUS
            </h1>
          </div>
          <div className="grow h-4 bg-feup"></div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-8 items-center">
        <section className="w-full flex flex-col items-center p-4 sm:gap-16 gap-0">
          <div className="flex flex-col w-full max-w-md text-center mb-4">
            <h2 className="font-bebas md:text-5xl text-3xl text-white uppercase sm:py-4 py-2 from-black to-yellow-500 bg-gradient-to-r rounded-full">
              {t("gold-sponsors")}
            </h2>
          </div>
          <div className="relative flex justify-center w-[80%] max-w-xs h-24">
            <Image
              src="/sponsors/gold/Inegi.svg"
              alt="Inegi Icon"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex md:flex-row flex-col sm:gap-16 gap-0 items-center justify-center w-[80%]">
            <div className="relative flex justify-center w-full lg:flex-1 max-w-xs h-32">
              <Image
                src="/sponsors/gold/Orion.svg"
                alt="Orion Icon"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative flex justify-center w-full lg:flex-1 max-w-xs h-32">
              <Image
                src="/sponsors/gold/Moldecar.svg"
                alt="Moldecar Icon"
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
        </section>
        <section className="w-full flex flex-col items-center p-4 sm:gap-16 gap-0">
          <div className="flex flex-col w-full max-w-md text-center mb-4">
            <h2 className="font-bebas md:text-5xl text-3xl text-white uppercase sm:py-4 py-2 from-black to-yellow-900 bg-gradient-to-r rounded-full">
              {t("bronze-sponsors")}
            </h2>
          </div>
        </section>
        <section className="w-full flex flex-col items-center p-4 sm:gap-16 gap-0">
          <div className="flex flex-col w-full max-w-md text-center mb-4">
            <h2 className="font-bebas md:text-5xl text-3xl text-white uppercase sm:py-4 py-2 from-black to-feup bg-gradient-to-r rounded-full">
              {t("software-partners")}
            </h2>
          </div>
        </section>
        <section className="w-full flex flex-col items-center p-4 sm:gap-16 gap-0">
          <div className="flex flex-col w-full max-w-md text-center mb-4">
            <h2 className="font-bebas md:text-5xl text-3xl text-white uppercase sm:py-4 py-2 from-black to-emerald-700 bg-gradient-to-r rounded-full">
              {t("institutional-partners")}
            </h2>
          </div>
        </section>
      </div>
    </main>
  );
}
