import Image from "next/image";
import bg from "@/public/PLUTUS.png";
import logoSrc from "@/public/project/INVICTUS.svg";
import invictusRocket from "@/public/project/invictus-rocket.webp";
import invictusRocketHorizontal from "@/public/project/invictus-rocket-horizontal.png";
import invictusCover from "@/public/project/invictus-under-cover.webp";
import { useTranslations } from "next-intl";
import { Card, CardHeader } from "@/components/ui/card";
import { FaTools } from "react-icons/fa";

export default function Page() {
  const t = useTranslations("common");
  return (
    <main className="max-h-screen relative flex flex-col items-center gap-16 sm:px-12 px-6 py-12 overflow-clip overflow-y-auto hide-scrollbar w-full">
      <h1 className="sm:mt-32 mt-16 w-full max-w-xs pb-4 text-center text-white font-bebas font-semibold lg:text-7xl md:text-6xl sm:text-5xl text-4xl border-b-2 border-white">
        {t("invictus")}
      </h1>
      <div className="sm:grid flex flex-col grid-cols-4 items-stretch w-full max-w-3xl sm:gap-4 gap-0">
        <div className="col-span-1 w-full h-full relative sm:block hidden">
          <Image
            src={invictusRocket}
            width={206}
            height={686}
            alt="Invictus rocket"
            className={"h-full object-contain"}
          />
        </div>
        <div className="col-span-1 w-full h-full relative sm:hidden block">
          <Image
            src={invictusRocketHorizontal}
            width={686}
            height={206}
            alt="Invictus rocket"
            className={"w-full object-contain"}
          />
        </div>
        <div className="flex flex-col gap-4 w-full col-span-3">
          <div className="flex flex-row sm:items-stretch items-center sm:justify-start justify-center gap-6 w-full">
            <h2 className="md:text-6xl sm:text-5xl text-3xl font-bebas text-white sm:text-left text-center">
              {t("project")} <br className="sm:inline hidden" />{" "}
              <span className="md:text-7xl sm:text-6xl text-3xl">
                {t("invictus")}
              </span>{" "}
              <br className="sm:inline hidden" /> <span>2024</span>
            </h2>
            <Image
              src={logoSrc}
              width={1080}
              height={1080}
              alt="Invictus logo"
              className={
                "w-full h-auto aspect-square md:max-w-48 sm:max-w-32 max-w-24 -rotate-48"
              }
            />
          </div>
          <p className="text-white font-arimo lg:text-xl md:text-lg sm:text-base text-sm sm:text-left text-center">
            {t("about-us-p1")}
          </p>
          <p className="text-white font-arimo lg:text-xl md:text-lg sm:text-base text-sm sm:text-left text-center">
            {t("about-us-p2")}
          </p>
          <p className="text-white font-arimo lg:text-xl md:text-lg sm:text-base text-sm sm:text-left text-center">
            {t("about-us-p3")}
          </p>
        </div>
      </div>
      <div className="sm:grid flex flex-col grid-cols-4 items-stretch w-full max-w-5xl sm:gap-4 gap-0">
        <div className="col-span-1 w-full h-full relative sm:block hidden">
          <Image
            src={invictusRocket}
            width={206}
            height={686}
            alt="Invictus rocket"
            className={"h-full object-contain"}
          />
          <div className="absolute w-1/2 h-[1px] bg-white right-2 top-1/3">
            <div className="absolute w-2 h-2 rounded-full bg-white right-0 -top-1 -rotate-45"></div>
          </div>
        </div>
        <div className="col-span-1 w-full h-full relative sm:hidden block">
          <Image
            src={invictusRocketHorizontal}
            width={686}
            height={206}
            alt="Invictus rocket"
            className={"w-full object-contain"}
          />
          <div className="absolute w-[1px] h-1/3 bg-white right-1/3 bottom-1/7">
            <div className="absolute w-2 h-2 rounded-full bg-white -right-1 bottom-0 -rotate-45"></div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full col-span-3">
          <Card className="p-4 bg-foreground/30 border-none h-full">
            <CardHeader className="flex flex-col items-center">
              <h1 className="w-full max-w-xs p-4 text-center text-white font-bebas font-semibold lg:text-5xl md:text-4xl sm:text-3xl text-2xl border-b-2 border-white">
                {t("avionics")}
              </h1>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-full max-w-3xl sm:gap-4 gap-0">
        <div className="flex flex-col gap-4 w-full col-span-3 ">
          <div className="flex flex-row items-center justify-center gap-6 w-full">
            <h2 className="md:text-6xl sm:text-5xl text-3xl font-bebas text-white text-center w-full">
              {t("project")}{" "}
              <span className="md:text-6xl sm:text-5xl text-3xl">
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
            <div className="bg-yellow-400 aspect-square w-fit sm:p-6 p-4 rounded-xl flex items-center justify-center rotate-45 relative">
              <div className="absolute border-black border-4 bg-yellow-400 w-8/9 h-8/9 rounded-xl"></div>
              <p className="font-bebas sm:text-3xl text-xl text-black text-center -rotate-45">
                {t("under")} <br />
                {t("construction")}
                <FaTools className="text-black z-10 mx-auto mt-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={bg}
        alt="cover photo"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
        className="w-full h-auto max-h-screen object-cover -z-10 !fixed"
      />
    </main>
  );
}
