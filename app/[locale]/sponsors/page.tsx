import { useTranslations } from "next-intl";
import Image from "next/image";
import bg from "@/public/sponsors/Fundo azul.png";
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
          placeholder="blur"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
          className="w-full h-auto object-cover object-[0%_75%] brightness-50"
        />
      </div>
    </main>
  );
}
