"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import bg from "@/public/project/plutus-bg.webp";
import plutusLogo from "@/public/project/plutus-no-text.png";
import classroom from "@/public/project/foto plutus 1.png";
import plutus1 from "@/public/project/PHOTO-2024-03-13-14-14-13 (1).jpg";
import plutus2 from "@/public/project/PHOTO-2024-03-22-16-31-59 (1).jpg";
import finalTeam from "@/public/project/finalTeam.jpg";
import { motion } from "framer-motion";
export function PlutusPage() {
  const t = useTranslations("common");
  return (
    <main className="w-full flex flex-col items-center md:gap-8 gap-6">
      <div className="md:h-[calc(66vh)] h-[calc(33vh)] min-h-[375px] md:min-h-[550px] flex items-center justify-center relative w-full">
        <div className="w-full absolute flex flex-col items-center justify-center p-1 max-w-7xl gap-4 sm:px-12 px-8 z-20">
          <h1 className="w-full max-w-xs pb-4 text-center text-white font-rajdhani font-bold lg:text-7xl md:text-6xl sm:text-5xl text-4xl border-b-2 border-white">
            {t("plutus")}
          </h1>
          <Image
            src={plutusLogo}
            className="object-contain w-[80%] h-auto md:max-w-xs sm:max-w-2xs max-w-3xs"
            alt="plutus logo"
          />
        </div>
        <Image
          src={bg}
          alt="cover photo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
          className="w-full h-auto object-cover object-[50%_10%] brightness-50"
        />
        <div className="z-10 bg-[#041322]/30 w-full h-full absolute"></div>
      </div>
      <div className="w-full flex flex-col gap-4 max-w-5xl mx-auto px-4">
        <h1 className="w-full text-center text-feup font-rajdhani font-semibold lg:text-6xl md:text-5xl sm:text-4xl text-3xl mx-auto mb-2">
          {t("objectives")}
        </h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.3, damping: 10 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: "-25%" },
          }}
          className="flex flex-row items-start justify-start w-full text-left gap-2"
        >
          <p className="font-bold font-rajdhani text-feup lg:text-4xl md:text-3xl sm:text-2xl text-xl">
            1
          </p>
          <p className="font-medium font-poppins text-black lg:text-2xl md:text-xl sm:text-lg text-base">
            {t("objectives-p1")}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.3, damping: 10 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: "25%" },
          }}
          className="flex flex-row-reverse items-start justify-start w-full text-right gap-2"
        >
          <p className="font-bold font-rajdhani text-feup lg:text-4xl md:text-3xl sm:text-2xl text-xl">
            2
          </p>
          <p className="font-medium font-poppins text-black lg:text-2xl md:text-xl sm:text-lg text-base">
            {t("objectives-p2")}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.3, damping: 10 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "25%" },
          }}
          className="w-full h-auto aspect-[2/1] mt-6"
        >
          <Image
            src={classroom}
            alt="classroom picture"
            className="w-full h-auto object-cover rounded"
          />
        </motion.div>
      </div>
      <div className="w-full py-6 bg-feup mb-6">
        <p className="w-full  px-4  max-w-5xl mx-auto text-left text-white font-inter lg:text-xl md:text-lg sm:text-base text-sm">
          {t("plutus-desc")}
        </p>
      </div>
      <div className="w-full mx-auto px-4 max-w-5xl flex flex-col gap-4 md:pb-12 pb-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, damping: 10 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: "25%" },
          }}
          className="grid grid-cols-2 w-full mx-auto items-center justify-center gap-4"
        >
          <Image
            src={plutus1}
            alt="plutus picture 1"
            className="h-full w-full max-h-[300px] rounded col-span-1 object-cover"
          />
          <Image
            src={plutus2}
            alt="plutus picture 2"
            className="h-full w-full max-h-[300px] rounded col-span-1 object-cover"
          />
        </motion.div>
        <h3 className="w-full text-center text-feup font-rajdhani font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl mx-auto mb-2">
          {t("launch")} - 2024
        </h3>
        <p className="w-full text-left text-black font-inter lg:text-xl md:text-lg sm:text-base text-sm">
          {t("plutus-desc-2")}
        </p>
        <Image
          src={finalTeam}
          alt="final team picture"
          className="w-full h-auto aspect-[1.7] object-[50%_75%] object-cover rounded"
        />
      </div>
    </main>
  );
}
