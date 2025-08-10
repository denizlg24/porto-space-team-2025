import { useTranslations } from "next-intl";
import ProjectCard from "./ProjectCard";

export default function Page() {
  const t = useTranslations("common");
  return (
    <section className="w-full flex flex-col items-center p-4 pt-8">
      <h1 className="font-rajdhani font-bold lg:text-6xl md:text-5xl text-4xl text-feup uppercase">
        {t("projects")}
      </h1>
      <div className="w-full max-w-6xl flex flex-col items-center gap-8 mt-10">
        <ProjectCard
          title={t("invictus")}
          p1={t("invictus-p1")}
          p2={t("invictus-p2")}
          logoClassName="-rotate-48"
          learnMoreHref="/projects/invictus"
          learnMore={t("learn-more")}
          bgSrc="/INVICTUS.png"
          bgClassName="object-[0%_60%]"
          logoSrc="/project/INVICTUS.svg"
        />
        <ProjectCard
          title={t("plutus")}
          p1={t("plutus-p1")}
          p2={t("plutus-p2")}
          learnMoreHref="/projects/plutus"
          learnMore={t("learn-more")}
          bgSrc="/PLUTUS.png"
          bgClassName="object-[0%_50%]"
          logoSrc="/project/PLUTUS.png"
        />
        <ProjectCard
          title={t("icarus")}
          p1={t("icarus-p1")}
          p2={t("icarus-p2")}
          learnMoreHref="/projects/icarus"
          learnMore={t("learn-more")}
          bgSrc="/ICARUS.jpg"
          bgClassName="object-[0%_0%]"
          logoSrc="/project/ICARUS.svg"
        />
      </div>
    </section>
  );
}
