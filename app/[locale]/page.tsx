import { useTranslations } from "next-intl";
import Image from "next/image";
import bg from "@/public/Capa.jpg";
import AboutUs from "@/components/AboutUs";
import CountingSection from "@/components/CountingSection";
import Projects from "@/components/Projects";
import SponsorsSection from "@/components/SponsorsSection";

export default function Home() {
  const t = useTranslations("common");
  return (
    <main className="w-full flex flex-col items-center">
      <div className="md:h-[calc(66vh)] h-[calc(33vh)] lg:h-screen min-h-[375px] md:min-h-[550px] lg:min-h-screen flex relative w-full">
        <div className="w-full absolute top-2/7 flex flex-col gap-0.5 items-center p-1 z-10">
          <h1 className="uppercase w-full text-center text-feup lg:text-8xl md:text-6xl text-2xl font-bebas drop-shadow-2xl">
            {t("headline")}
          </h1>
          <h2 className="uppercase w-full text-center text-feup lg:text-4xl md:text-2xl text-md text font-bebas drop-shadow-2xl">
            {t("subtitle")}
          </h2>
        </div>

        <Image
          src={bg}
          alt="cover photo"
          fill
          placeholder="blur"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
          className="w-full h-auto object-cover object-[0%_75%]"
        />
      </div>
      <AboutUs />
      <CountingSection />
      <Projects />
      <SponsorsSection />
    </main>
  );
}
