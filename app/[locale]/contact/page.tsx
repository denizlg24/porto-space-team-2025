import { useTranslations } from "next-intl";
import Image from "next/image";
import bg from "@/public/contact/Fundo_Azul.png";
import { ContactForm } from "@/components/contact/ContactForm";

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
    title: t("contact-title"),
    description: t("contact-description"),
    keywords: t("contact-keywords").split(","),
  };
}

export default function Page() {
  const t = useTranslations("common");
  return (
    <main className="w-full flex flex-col items-center">
      <div className="md:h-[calc(66vh)] h-[calc(33vh)] min-h-[375px] md:min-h-[550px] flex items-center justify-center relative w-full">
        <div className="w-full absolute flex flex-col items-center justify-center p-1 z-10 max-w-7xl gap-4 sm:px-12 px-8">
          <h1 className="uppercase w-full text-center text-white font-bold lg:text-8xl sm:text-6xl text-4xl font-rajdhani drop-shadow-2xl">
            {t("nav-contact")}
          </h1>
        </div>
        <Image
          src={bg}
          alt="cover photo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
          className="w-full h-auto object-cover object-[50%_10%] brightness-50"
        />
      </div>
      <div className="flex flex-col w-full max-w-3xl items-center py-12 px-4">
        <ContactForm />
      </div>
    </main>
  );
}
