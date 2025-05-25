"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
type Props = {
  defaultValue: string;
};

export default function LocaleSwitcherSelect({ defaultValue }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const [currentLocale, updateLocale] = useState(defaultValue);

  useEffect(() => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error they always match
        { pathname, params },
        { locale: currentLocale }
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocale]);

  return (
    <button
      disabled={isPending}
      className="flex flex-col items-center justify-center h-full -translate-y-0.5 hover:cursor-pointer"
      onClick={() => {
        updateLocale((prev) => (prev == "en" ? "pt" : "en"));
      }}
    >
      {currentLocale == "en" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/gb.png"
          alt={currentLocale}
          className="h-auto w-6 aspect-square rounded-full object-cover"
        ></img>
      )}
      {currentLocale == "pt" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/pt.png"
          alt={currentLocale}
          className="h-auto w-6 aspect-square rounded-full object-cover"
        ></img>
      )}
    </button>
  );
}
