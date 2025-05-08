import { Link } from "@/i18n/navigation";
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
    <div className="w-full rounded-lg relative md:p-12 p-6 flex md:flex-row flex-col-reverse items-center justify-between gap-8 overflow-hidden shadow-2xl">
      <Image
        src={logoSrc}
        width={1080}
        height={1080}
        alt={title}
        className={"w-full h-auto aspect-square max-w-64 " + logoClassName}
      />
      <div className="flex flex-col items-center w-full gap-4">
        <h1 className="text-left w-full font-bebas md:text-5xl text-3xl text-white">
          {title}
        </h1>
        <p className="text-left w-full font-arimo md:text-xl text-white">
          {p1}
        </p>
        <p className="text-left w-full font-arimo md:text-xl text-white">
          {p2}
        </p>
        <Link
          href={learnMoreHref}
          className="w-full text-right text-white md:text-3xl text-lg hover:underline font-bebas"
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
    </div>
  );
}
