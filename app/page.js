import Brand from "@/components/landingPage/Brands";
import Hero from "@/components/landingPage/Hero";
import HowWeDoIt from "@/components/landingPage/HowWeDoIt";
import WhoAreWe from "@/components/landingPage/WhoAreWe";
import WorkSection from "@/components/landingPage/WorkSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <HowWeDoIt />
      <WhoAreWe />
      <Brand />
    </>
  );
}
