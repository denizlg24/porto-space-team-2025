import { InvictusDesc } from "./InvictusDesc";

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
    title: t("invictus-title"),
    description: t("invictus-description"),
    keywords: t("invictus-keywords").split(","),
  };
}

export default function Page() {
  return <InvictusDesc />;
}
