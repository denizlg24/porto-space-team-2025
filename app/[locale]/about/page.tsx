import { Metadata } from "next";
import { AboutAnimatedPage } from "@/components/about/AboutAnimatedPage";

export const metadata: Metadata = {
  title: "Porto Space Team | About",
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

export default function Page() {
  return <AboutAnimatedPage />;
}
