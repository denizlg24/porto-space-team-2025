import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import pluris from "@/public/sponsors/diamond/Logo_Pluris_2.png";
export default function Sponsors() {
  const t = useTranslations("common");
  return (
    <section className="w-full flex flex-col items-center p-4 pt-8 sm:gap-16 gap-0 mt-16">
      <div className="flex flex-col w-full text-center gap-1">
        <h1 className="font-rajdhani font-semibold md:text-6xl sm:text-4xl text-2xl text-feup uppercase mx-auto border-b-4 border-feup pb-2 px-4 w-fit">
          {t("sponsors")}
        </h1>
        <h2 className="font-poppins md:text-4xl text-2xl text-feup uppercase">
          {t("diamond-sponsors")}
        </h2>
      </div>
      <div className="w-full max-w-xl px-4">
        <Image src={pluris} alt="Pluris logo" className="object-contain" />
      </div>
      <Link
        className="w-full max-w-3xs text-center uppercase font-semibold flex items-center justify-center px-4 py-1 border-2 sm:mt-0 mt-6 border-feup text-feup font-rajdhani md:text-xl sm:text-base text-sm hover:border-transparent hover:cursor-pointer hover:bg-feup hover:text-white transition-colors rounded"
        href="/sponsors"
      >
        {t("more")}
      </Link>
    </section>
  );
}
