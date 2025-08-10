import { useTranslations } from "next-intl";
import AnimatedCounter from "./AnimatedCounter";

export default function Section() {
  const t = useTranslations("common");

  return (
    <section className="w-full sm:p-6 p-4 flex flex-row justify-evenly items-center bg-feup text-white text-center">
      <div className="flex flex-col items-center font-arimo uppercase flex-1">
        <h2 className="lg:text-4xl md:text-3xl font-bebas text-2xl">
          {t("creation")}
        </h2>
        <p className="font-bold lg:text-5xl md:text-4xl text-2xl">2022</p>
      </div>
      <div className="flex flex-col items-center font-arimo uppercase flex-1">
        <h2 className="lg:text-4xl md:text-3xl font-bebas text-2xl">
          {t("members")}
        </h2>
        <p className="font-bold lg:text-5xl md:text-4xl text-2xl">
          <AnimatedCounter targetNumber={70} suffix="+" />
        </p>
      </div>
      <div className="flex flex-col items-center font-arimo uppercase flex-1">
        <h2 className="lg:text-4xl md:text-3xl font-bebas text-2xl">
          {t("projects")}
        </h2>
        <p className="font-bold lg:text-5xl md:text-4xl text-2xl">
          <AnimatedCounter targetNumber={3} />
        </p>
      </div>
    </section>
  );
}
