import { PlutusPage } from "./PlutusPage";

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
    title: t("plutus-title"),
    description: t("plutus-description"),
    keywords: t("plutus-keywords").split(","),
  };
}

export default function Page() {
  return <PlutusPage />;
}
