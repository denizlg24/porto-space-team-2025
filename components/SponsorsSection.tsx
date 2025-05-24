import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Sponsors() {
  const t = useTranslations("common");
  return (
    <section className="w-full flex flex-col items-center p-4 pt-8 sm:gap-16 gap-0 mt-16">
      <div className="flex flex-col w-full max-w-md text-center gap-1">
        <h1 className="font-bebas md:text-7xl text-5xl text-feup uppercase">
          {t("sponsors")}
        </h1>
        <div className="w-full bg-feup h-1"></div>
        <h2 className="font-bebas md:text-5xl text-3xl text-feup uppercase">
          {t("gold-sponsors")}
        </h2>
      </div>
      <div className="relative flex justify-center w-[80%] max-w-xs h-24">
        <Image
          src="/sponsors/gold/Inegi.svg"
          alt="Inegi Icon"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex md:flex-row flex-col sm:gap-16 gap-0 items-center justify-center w-[80%]">
        <div className="relative flex justify-center w-full lg:flex-1 max-w-xs h-32">
          <Image
            src="/sponsors/gold/Orion.svg"
            alt="Orion Icon"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative flex justify-center w-full lg:flex-1 max-w-xs h-32">
          <Image
            src="/sponsors/gold/Moldecar.svg"
            alt="Moldecar Icon"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <Link
        className="w-full max-w-3xs text-center px-4 py-1 border-4 sm:mt-0 mt-6 border-feup text-feup font-bebas text-xl hover:border-transparent hover:cursor-pointer hover:bg-feup hover:text-white transition-colors rounded"
        href="/sponsors"
      >
        {t("more")}
      </Link>
    </section>
  );
}
