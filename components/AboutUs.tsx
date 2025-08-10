"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import groupPhoto from "@/public/about/2025.jpg";
import { motion } from "framer-motion";

export default function Page() {
  const t = useTranslations("common");

  return (
    <section className="md:grid flex flex-col grid-cols-2 w-full max-w-7xl sm:text-lg text-base py-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, damping: 10 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: "-25%" },
        }}
        className="col-span-1 w-full h-full flex flex-col items-start gap-4 font-inter px-4 md:py-12 py-4"
      >
        <h1 className="w-full text-left text-feup lg:text-4xl md:text-3xl sm:text-2xl text-xl font-rajdhani">
          {t("about-us")}
        </h1>
        <p>{t("about-us-p1")}</p>
        <p>{t("about-us-p2")}</p>
        <p>{t("about-us-p3")}</p>
        <Link
          className="self-end mt-auto px-4 py-1 border-2 border-feup text-feup font-inter font-semibold md:text-xl sm:text-lg text-base hover:border-transparent hover:cursor-pointer hover:bg-feup hover:text-white transition-colors rounded"
          href={"/about"}
        >
          {t("know-more")}
        </Link>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, damping: 10 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: "25%" },
        }}
        className="col-span-1 w-full flex items-center justify-center px-4 md:py-12 pt-0 drop-shadow-xl rounded"
      >
        <Image
          src={groupPhoto}
          alt="Group photo"
          fill
          className="relative! object-cover rounded lg:object-[0%_50%] md:object-[25%_50%] object-[50%_50%]"
        />
      </motion.div>
    </section>
  );
}
