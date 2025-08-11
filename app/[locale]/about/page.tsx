import { AboutAnimatedPage } from "@/components/about/AboutAnimatedPage";
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
    title: t("about-title"),
    description: t("about-description"),
    keywords: t("about-keywords").split(","),
  };
}

export default function Page() {
  return <AboutAnimatedPage />;
}
