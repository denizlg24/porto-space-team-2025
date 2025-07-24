"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import groupPhoto from "@/public/Equipa.jpg";

export default function Page() {
  const t = useTranslations("common");

  return (
    <section className="md:grid flex flex-col grid-cols-2 w-full max-w-7xl sm:text-lg text-base py-4">
      <div className="col-span-1 w-full h-full flex flex-col items-start gap-4 font-arimo px-4 md:py-12 py-4">
        <h1 className="w-full text-left text-feup lg:text-4xl md:text-3xl text-2xl font-bebas">
          {t("about-us")}
        </h1>
        <p>{t("about-us-p1")}</p>
        <p>{t("about-us-p2")}</p>
        <p>{t("about-us-p3")}</p>
        <Link
          className="self-end mt-auto px-4 py-1 border-4 border-feup text-feup font-bebas text-xl hover:border-transparent hover:cursor-pointer hover:bg-feup hover:text-white transition-colors rounded"
          href={"/about"}
        >
          {t("know-more")}
        </Link>
      </div>
      <div className="col-span-1 w-full flex items-center justify-center px-4 md:py-12 pt-0 drop-shadow-xl rounded">
        <Image
          src={groupPhoto}
          alt="Group photo"
          fill
          className="relative! object-cover rounded"
        />
      </div>
    </section>
  );
}
