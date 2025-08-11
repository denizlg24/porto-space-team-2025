import { useTranslations } from "next-intl";
import Image from "next/image";
import bg from "@/public/join/Fundo_azul.png";

import { ApplyForm } from "@/components/apply/ApplyForm";

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
    title: t("apply-title"),
    description: t("apply-description"),
    keywords: t("apply-keywords").split(","),
  };
}

export default function Page() {
  const t = useTranslations("common");
  return (
    <main className="w-full flex flex-col items-center">
      <div className="md:h-[calc(66vh)] h-[calc(33vh)] min-h-[375px] md:min-h-[550px] flex items-center justify-center relative w-full">
        <div className="w-full absolute flex flex-col items-center justify-center p-1 z-10 max-w-7xl gap-4 sm:px-12 px-8">
          <h1 className="uppercase w-full text-center text-white lg:text-8xl sm:text-6xl text-4xl font-rajdhani font-bold drop-shadow-2xl">
            {t("nav-join")}
          </h1>
        </div>
        <Image
          src={bg}
          alt="cover photo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
          className="w-full h-auto object-cover object-[50%_25%] brightness-50"
        />
      </div>
      <div className="flex flex-col w-full max-w-3xl items-center py-12 px-4">
        <h1 className="text-feup font-rajdhani font-bold md:text-3xl sm:text-2xl text-base text-center">
          {t("want-to-be-part")} <br className="" />
          {t("apply-here")}
        </h1>
        <ApplyForm />
      </div>
    </main>
  );
}
