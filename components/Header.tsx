"use client";

import Image from "next/image";
import logo from "@/public/logo-horizontal.png";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { FaLinkedin, FaInstagram, FaFacebookSquare } from "react-icons/fa";

export default function Header() {
  const t = useTranslations("common");
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="flex fixed top-0 z-99 flex-row items-center justify-between p-2 sm:p-4 drop-shadow-2xl w-full">
      <Link
        href="/"
        className="flex flex-col items-center justify-center w-fit"
      >
        <Image
          src={logo}
          width={709}
          height={202}
          priority
          alt="Porto Space Team Logo"
          className="lg:h-16 md:h-14 h-10 w-auto"
        />
      </Link>
      <NavigationMenu className="flex items-center translate-y-1">
        <NavigationMenuList>
          <NavigationMenuItem className="uppercase md:flex hidden">
            <NavigationMenuLink
              href="/about"
              className="bg-transparent! text-white font-bebas text-4xl"
            >
              {t("nav-about")}
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="uppercase md:flex hidden">
            <NavigationMenuTrigger className="uppercase h-full bg-transparent! text-white font-bebas text-4xl">
              {t("nav-projects")}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="uppercase flex w-full flex-col items-stretch min-w-[250px]">
              <NavigationMenuLink
                className=" text-feup font-bebas text-2xl w-full text-center"
                href="/projects/invictus"
              >
                {t("invictus")}
              </NavigationMenuLink>
              <NavigationMenuLink
                className=" text-feup font-bebas text-2xl w-full text-center"
                href="/projects/icarus"
              >
                {t("icarus")}
              </NavigationMenuLink>
              <NavigationMenuLink
                className=" text-feup font-bebas text-2xl w-full text-center"
                href="/projects/plutus"
              >
                {t("plutus")}
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="uppercase items-center justify-center md:flex hidden">
            <NavigationMenuLink
              className="bg-transparent! text-white font-bebas text-4xl"
              href="/sponsors"
            >
              {t("nav-sponsors")}
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="-translate-y-1 relative">
            <Hamburger
              size={36}
              toggled={isOpen}
              toggle={setOpen}
              color={isOpen ? "#8c2d19" : "#ffffff"}
            />
            {isOpen && (
              <div className="absolute bg-background w-[250px] flex flex-col gap-0.5 items-center p-2 right-1 z-99 rounded">
                <NavigationMenuLink
                  className=" text-feup font-bebas text-2xl w-full text-center md:hidden block"
                  href="/about"
                >
                  {t("nav-about")}
                </NavigationMenuLink>
                <NavigationMenuLink
                  className=" text-feup font-bebas text-2xl w-full text-center md:hidden block"
                  href="/projects"
                >
                  {t("nav-projects")}
                </NavigationMenuLink>
                <NavigationMenuLink
                  className=" text-feup font-bebas text-2xl w-full text-center md:hidden block"
                  href="/sponsors"
                >
                  {t("nav-sponsors")}
                </NavigationMenuLink>
                <NavigationMenuLink
                  className=" text-feup font-bebas text-2xl w-full text-center"
                  href="/projects/icarus"
                >
                  {t("nav-competitions")}
                </NavigationMenuLink>
                <NavigationMenuLink
                  className=" text-feup font-bebas text-2xl w-full text-center"
                  href="/projects/icarus"
                >
                  {t("nav-newsletter")}
                </NavigationMenuLink>
                <NavigationMenuLink
                  className=" text-feup font-bebas text-2xl w-full text-center"
                  href="/projects/icarus"
                >
                  {t("nav-contact")}
                </NavigationMenuLink>
                <NavigationMenuLink
                  className=" text-white font-bebas bg-feup text-2xl w-full text-center"
                  href="/projects/icarus"
                >
                  {t("nav-join")}
                </NavigationMenuLink>
                <div className="grid grid-cols-3 w-[150px] gap-4 px-4 mt-2 ">
                  <a
                    href="https://www.linkedin.com/company/porto-space-team"
                    target="_blank"
                  >
                    <FaLinkedin className="text-feup col-span-1 w-full h-auto aspect-square" />
                  </a>
                  <a
                    href="https://www.instagram.com/portospaceteam/"
                    target="_blank"
                  >
                    <FaInstagram className="text-feup col-span-1 w-full h-auto aspect-square" />
                  </a>
                  <a
                    href="https://www.facebook.com/portospaceteam"
                    target="_blank"
                  >
                    <FaFacebookSquare className="text-feup col-span-1 w-full h-auto aspect-square" />
                  </a>
                </div>
              </div>
            )}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
