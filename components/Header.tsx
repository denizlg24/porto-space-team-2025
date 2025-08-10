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
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { FaLinkedin, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import LocaleSwitcher from "./LocaleSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const t = useTranslations("common");
  const [isOpen, setOpen] = useState(false);
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [isHamburgerProjectsToggled, setIsHamburgerProjectsToggled] =
    useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsPageScrolled(window.scrollY !== 0);
    };
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [isPageScrolled]);

  return (
    <header
      className={`flex fixed top-0 left-0 z-99 flex-row items-center justify-between drop-shadow-2xl w-screen ${
        isPageScrolled ? " bg-feup/25 backdrop-blur-3xl" : ""
      }`}
    >
      <div className="w-screen flex flex-row items-center justify-between mx-auto max-w-7xl py-2">
        <Link
          href="/"
          className="flex flex-col items-center justify-center w-fit ml-2"
        >
          <Image
            src={logo}
            width={709}
            height={202}
            priority
            alt="Porto Space Team Logo"
            className="md:h-14 h-10 w-auto"
          />
        </Link>
        <NavigationMenu className="flex items-center">
          <NavigationMenuList>
            <NavigationMenuItem className="uppercase md:flex hidden">
              <NavigationMenuLink
                href="/about"
                className="bg-transparent! text-white font-rajdhani font-semibold lg:text-2xl md:text-xl sm:text-lg text-base translate-y-0.5 hover:text-feup!"
              >
                {t("nav-about")}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="uppercase md:flex hidden">
              <NavigationMenuTrigger className="uppercase p-2 h-full bg-transparent! text-white font-rajdhani font-semibold  lg:text-2xl md:text-xl sm:text-lg text-base translate-y-0.5 hover:text-feup! data-[state=open]:text-feup!">
                {t("nav-projects")}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="uppercase flex w-full flex-col items-stretch min-w-[250px]">
                <NavigationMenuLink
                  className=" text-feup font-rajdhani font-semibold lg:text-lg text-base w-full text-center"
                  href="/projects/invictus"
                >
                  {t("invictus")}
                </NavigationMenuLink>
                <NavigationMenuLink
                  className=" text-feup font-rajdhani font-semibold lg:text-lg text-base w-full text-center"
                  href="/projects/icarus"
                >
                  {t("icarus")}
                </NavigationMenuLink>
                <NavigationMenuLink
                  className=" text-feup font-rajdhani font-semibold lg:text-lg text-base w-full text-center"
                  href="/projects/plutus"
                >
                  {t("plutus")}
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="uppercase items-center justify-center md:flex hidden">
              <NavigationMenuLink
                className="bg-transparent! text-white font-rajdhani font-semibold  lg:text-2xl md:text-xl sm:text-lg text-base translate-y-0.5 hover:text-feup!"
                href="/sponsors"
              >
                {t("nav-sponsors")}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className=" translate-y-1">
              <LocaleSwitcher />
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <div className="w-full h-full md:flex hidden items-center justify-center translate-y-0.5">
                <Hamburger
                  size={24}
                  toggled={isOpen}
                  toggle={setOpen}
                  color={isOpen ? "#8c2d19" : "#ffffff"}
                />
              </div>
              <div className="w-full h-full md:hidden flex items-center justify-center">
                <Hamburger
                  size={16}
                  toggled={isOpen}
                  toggle={setOpen}
                  color={isOpen ? "#8c2d19" : "#ffffff"}
                />
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="mobile-menu"
                    initial={{ opacity: 0, y: -50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute bg-background w-[250px] flex flex-col gap-0.5 items-center p-2 right-1 z-99 rounded"
                  >
                    <NavigationMenuLink
                      className=" text-feup font-rajdhani uppercase font-semibold lg:text-xl md:text-lg sm:text-base text-sm w-full text-center md:hidden block"
                      href="/about"
                    >
                      {t("nav-about")}
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className=" text-feup font-rajdhani uppercase font-semibold lg:text-xl md:text-lg sm:text-base text-sm w-full text-center md:hidden flex flex-col items-center justify-center relative"
                      href="/projects"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsHamburgerProjectsToggled((prev) => !prev);
                      }}
                    >
                      {t("nav-projects")}
                      <ChevronDown
                        className={
                          "h-5! w-5! absolute translate-x-13 top-2.5 transition-transform duration-300 text-feup" +
                          (isHamburgerProjectsToggled ? "rotate-180" : "")
                        }
                      />
                      <AnimatePresence>
                        {isHamburgerProjectsToggled && (
                          <motion.div
                            initial={{ opacity: 0, y: -50, scale: 1 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -50, scale: 1 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="w-full px-4 flex flex-col"
                          >
                            <NavigationMenuLink
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              className=" text-foreground font-rajdhani uppercase font-semibold sm:text-sm text-xs w-full text-center"
                              href="/projects/invictus"
                            >
                              {t("invictus")}
                            </NavigationMenuLink>
                            <NavigationMenuLink
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              className=" text-foreground font-rajdhani uppercase font-semibold sm:text-sm text-xs w-full text-center"
                              href="/projects/icarus"
                            >
                              {t("icarus")}
                            </NavigationMenuLink>
                            <NavigationMenuLink
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              className=" text-foreground font-rajdhani uppercase font-semibold sm:text-sm text-xs w-full text-center"
                              href="/projects/plutus"
                            >
                              {t("plutus")}
                            </NavigationMenuLink>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </NavigationMenuLink>

                    <NavigationMenuLink
                      className=" text-feup font-rajdhani uppercase font-semibold lg:text-xl md:text-lg sm:text-base text-sm w-full text-center md:hidden block"
                      href="/sponsors"
                    >
                      {t("nav-sponsors")}
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className=" text-feup font-rajdhani uppercase font-semibold lg:text-xl md:text-lg sm:text-base text-sm w-full text-center"
                      href="/competitions"
                    >
                      {t("nav-competitions")}
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className=" text-feup font-rajdhani uppercase font-semibold lg:text-xl md:text-lg sm:text-base text-sm w-full text-center"
                      href="/newsletter"
                    >
                      {t("nav-newsletter")}
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className=" text-feup font-rajdhani uppercase font-semibold lg:text-xl md:text-lg sm:text-base text-sm w-full text-center"
                      href="/contact"
                    >
                      {t("nav-contact")}
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      className=" text-white font-rajdhani uppercase font-semibold bg-feup lg:text-xl md:text-lg sm:text-base text-sm w-full text-center"
                      href="/join"
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
                  </motion.div>
                )}
              </AnimatePresence>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
