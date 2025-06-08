import { useTranslations } from "next-intl";
import bg from "@/public/ICARUS.jpg";
import icarus from "@/public/project/ICARUS.svg";
import icarus_build from "@/public/project/icarus-build.webp";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
export default function Page() {
  const t = useTranslations("common");
  return (
    <main className="h-screen relative flex flex-col items-center gap-16 sm:px-12 px-6 py-12 overflow-clip overflow-y-auto hide-scrollbar w-full">
      <h1 className="sm:mt-32 mt-16 w-full max-w-xs pb-4 text-center text-white font-bebas font-semibold lg:text-7xl md:text-6xl sm:text-5xl text-4xl border-b-2 border-feup">
        {t("icarus")}
      </h1>
      <div className="sm:grid flex flex-col-reverse grid-cols-2 items-stretch justify-center w-full max-w-3xl gap-8">
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
      <div className="flex flex-col font-bebas w-full max-w-3xl gap-4">
        <p className="sm:text-4xl text-3xl text-white">
          {t("project")} <span className="text-feup">{t("icarus")}</span> 2025
        </p>
        <p className="font-arimo sm:text-lg text-base text-white">
          {t("about-us-p1")}
        </p>
        <p className="font-arimo sm:text-lg text-base text-white">
          {t("about-us-p2")}
        </p>
      </div>
      <Image
        src={icarus_build}
        width={799}
        height={651}
        alt="icarus build"
        className="w-[90%] max-w-3xl"
      />
      <Card className="p-4 w-full max-w-3xl bg-feup/50 border-none">
        <CardHeader className="w-full text-center text-white font-bebas text-3xl border-b-2 border-white max-w-xs mx-auto">
          <CardTitle className="!font-medium">ON-BOARD COMPUTER</CardTitle>
        </CardHeader>
      </Card>
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
