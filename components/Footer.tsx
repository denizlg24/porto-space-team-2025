import { useTranslations } from "next-intl";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaMapLocationDot } from "react-icons/fa6";
export default function Footer() {
  const t = useTranslations("common");
  return (
    <footer className="w-full bg-feup p-6 flex flex-col gap-1">
      <h1 className="text-white font-bebas sm:text-3xl text-2xl">
        PORTO SPACE TEAM
      </h1>
      <h2 className="text-white font-arimo sm:text-2xl text-lg">
        {t("contacts")}
      </h2>
      <div className="flex flex-row items-center gap-2 text-white font-arimo text-lg">
        <CiLocationOn className="w-6 h-6" />
        <p className="sm:text-base text-xs">
          Rua Dr. Roberto Frias, s/n, DEMec, 4200-465 Porto, Portugal
        </p>
      </div>
      <div className="flex flex-row items-center gap-4 text-white font-arimo text-lg">
        <CiMail className="w-6 h-6" />
        <p className="sm:text-base text-xs">geral@portospaceteam.pt</p>
      </div>
      <div className="w-full flex flex-row-reverse gap-2 sm:justify-start justify-end sm:pt-0 pt-4 items-center">
        <a
          href="https://www.google.com/maps/place/Porto+Space+Team/@41.1781163,-8.5945483,15z/data=!4m6!3m5!1s0xd24657d6bcac819:0x58ab6feb15e61d9b!8m2!3d41.1781163!4d-8.5945483!16s%2Fg%2F11tfjwlz4z?entry=ttu"
          target="_blank"
          className="flex items-center justify-center p-2 border border-white text-white rounded-full hover:cursor-pointer"
        >
          <FaMapLocationDot className="w-6 h-6" />
        </a>
        <a
          href="mailto:geral@portospaceteam.pt"
          target="_blank"
          className="flex items-center justify-center p-2 border border-white text-white rounded-full hover:cursor-pointer"
        >
          <CiMail className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/company/porto-space-team"
          target="_blank"
          className="flex items-center justify-center p-2 border border-white text-white rounded-full hover:cursor-pointer"
        >
          <SlSocialLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/company/porto-space-team"
          target="_blank"
          className="flex items-center justify-center p-2 border border-white text-white rounded-full hover:cursor-pointer"
        >
          <FaFacebookF className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/portospaceteam/"
          target="_blank"
          className="flex items-center justify-center p-2 border border-white text-white rounded-full hover:cursor-pointer"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}
