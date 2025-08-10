"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
  bgSrc: string;
  bgClassName?: string;
  logoSrc: string;
  logoClassName?: string;
  learnMore: string;
  learnMoreHref: string;
  title: string;
  p1: string;
  p2: string;
};

export default function ProjectCard({
  bgSrc,
  bgClassName,
  logoSrc,
  logoClassName,
  learnMore,
  learnMoreHref,
  title,
  p1,
  p2,
}: ProjectCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, damping: 10 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 1, y: "25%" },
      }}
      className="w-full rounded-lg relative md:p-12 p-6 flex flex-row items-center justify-between gap-8 overflow-hidden shadow-2xl"
    >
      <Image
        src={logoSrc}
        width={1080}
        height={1080}
        alt={title}
        className={
          "w-full h-auto aspect-square max-w-64 md:block hidden " +
          logoClassName
        }
      />
      <div className="flex flex-col items-center w-full gap-4">
        <div className="flex flex-row items-start justify-between w-full relative">
          <h1 className="text-left w-full font-rajdhani font-bold lg:text-5xl md:text-4xl text-2xl text-white">
            {title}
          </h1>
          <div className="bg-white/25 rounded-full p-1 absolute -right-4 -top-4">
            <Image
              src={logoSrc}
              width={1080}
              height={1080}
              alt={title}
              className={
                "w-full h-auto aspect-square max-w-16 md:hidden block " +
                logoClassName
              }
            />
          </div>
        </div>

        <p className="text-left w-full font-inter md:text-xl text-white md:mt-0 mt-4 bg-black/25 px-1 rounded">
          {p1}
        </p>
        <p className="text-left w-full font-inter md:text-xl text-white  bg-black/25 px-1 rounded">
          {p2}
        </p>
        <Link
          href={learnMoreHref}
          className="w-full text-right text-white md:text-2xl sm:text-lg text-base hover:underline font-rajdhani"
        >
          {learnMore}
        </Link>
      </div>
      <Image
        src={bgSrc}
        alt="background img"
        fill
        className={"w-full h-full object-cover -z-10 rounded-lg " + bgClassName}
      />
    </motion.div>
  );
}
