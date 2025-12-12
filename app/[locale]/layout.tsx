import type { Metadata } from "next";
import "../globals.css";
import { ReactNode } from "react";
import { getMessages } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Toaster } from "@/components/ui/sonner";
import {
  Bebas_Neue,
  Arimo,
  Inter,
  Rajdhani,
  Barlow_Condensed,
  Poppins,
  Didact_Gothic,
} from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  weight: "variable",
  subsets: ["latin-ext"],
  variable: "--font-inter",
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin-ext"],
  variable: "--font-rajdhani",
});

const barlow = Barlow_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
  variable: "--font-barlow",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
  variable: "--font-poppins",
});

const dida = Didact_Gothic({
  weight: "400",
  subsets: ["latin-ext"],
  variable: "--font-dida",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin-ext"],
  variable: "--font-bebas",
});

const arimo = Arimo({
  weight: "variable",
  subsets: ["latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-arimo",
});

export const metadata: Metadata = {
  title: "Porto Space Team | Student Aerospace Innovation at FEUP",
  description:
    "Discover Porto Space Team, a student-led aerospace association at FEUP, pioneering hybrid-propellant rocket development and space research in Portugal.",
  keywords: [
    "Porto Space Team",
    "FEUP aerospace students",
    "hybrid rocket Portugal",
    "student rocketry",
    "aerospace engineering Porto",
  ],
};

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body
        className={`antialiased ${bebas.variable} ${arimo.variable} ${inter.variable} ${rajdhani.variable} ${barlow.variable} ${poppins.variable} ${dida.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <Toaster theme="light" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
