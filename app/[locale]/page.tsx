import { useTranslations } from "next-intl";
import Image from "next/image";
export default function Home() {
  const t = useTranslations("common");
  return (
    <main className="w-full h-screen flex relative">
      <div className="w-full absolute top-2/7 flex flex-col gap-0.5 items-center p-1 z-99">
        <h1 className="uppercase w-full text-center text-feup text-8xl font-bebas">
          {t("headline")}
        </h1>
        <h2 className="uppercase w-full text-center text-feup text-4xl font-bebas">
          {t("subtitle")}
        </h2>
      </div>

      <Image
        src="/Capa.jpg"
        alt="cover photo"
        fill
        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 300vw"
        className="w-full h-auto object-cover"
      />
    </main>
  );
}
