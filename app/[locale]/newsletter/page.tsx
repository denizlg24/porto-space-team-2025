import { useTranslations } from "next-intl";
import Image from "next/image";
import bg from "@/public/newsletter.webp";
import week1Cover from "@/public/newsletters/week1_page-0001.jpg";

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
    title: t("newsletter-title"),
    description: t("newsletter-description"),
    keywords: t("newsletter-keywords").split(","),
  };
}

const newsletters = [
  {
    id: 1,
    title: "1st Edition",
    date: "September, 2024",
    file_name: "/newsletters/week1.pdf",
    img: week1Cover,
  },
];

export default function Page() {
  const t = useTranslations("common");
  return (
    <main className="w-full flex flex-col items-center">
      <div className="md:h-[calc(66vh)] h-[calc(33vh)] min-h-[375px] md:min-h-[550px] flex items-center justify-center relative w-full">
        <div className="w-full absolute flex flex-col items-center justify-center p-1 z-10 max-w-7xl gap-4 sm:px-12 px-8">
          <h1 className="uppercase w-full text-center text-white lg:text-8xl sm:text-6xl text-4xl font-rajdhani font-bold drop-shadow-2xl">
            NEWSLETTERS
          </h1>
        </div>
        <Image
          src={bg}
          alt="cover photo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 300vw"
          className="w-full h-auto object-cover object-[50%_50%] brightness-50"
        />
      </div>
      <div className="flex flex-col w-full max-w-3xl items-center px-4">
        {newsletters.map((newsletter) => {
          return (
            <div
              key={newsletter.id}
              className="w-full grid sm:grid-cols-2 grid-cols-1 py-12 gap-8"
            >
              <div className="col-span-1 w-full flex flex-col sm:items-start items-center">
                <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold font-poppins text-feup">
                  {newsletter.title}
                </h1>
                <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold font-poppins mt-2">
                  {newsletter.date}
                </h2>
                <a
                  className="mt-4 px-4 py-1 border-2 border-feup text-feup font-inter font-semibold md:text-xl sm:text-lg text-base hover:border-transparent hover:cursor-pointer hover:bg-feup hover:text-white transition-colors rounded"
                  href={newsletter.file_name}
                  target="_blank"
                >
                  {t("know-more")}
                </a>
              </div>
              <div className="col-span-1 w-full">
                <Image
                  src={newsletter.img}
                  alt="newsletter-cover"
                  className="w-full max-w-3xs mx-auto h-auto object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
