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
    <select
      value={currentLocale}
      disabled={isPending}
      onChange={(e) => {
        updateLocale(e.target.value);
      }}
      className="inline-flex w-full bg-transparent appearance-none py-1 pl-2 pr-2  focus:border-none! focus:outline-0! focus:ring-0! text-white font-bebas text-3xl"
    >
      <option value="en" className="text-xl text-feup">
        EN
      </option>
      <option value="pt" className="text-xl text-feup">
        PT
      </option>
    </select>
  );
}
