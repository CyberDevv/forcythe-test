import Blog from "@/components/home/Blog";
import CallToAction from "@/components/home/CallToAction";
import Hero from "@/components/home/hero";
import ProjectsContainer from "@/components/home/Projects";
import Scale from "@/components/home/Scale";
import ShowcaseContainer from "@/components/home/Showcase";
import SparksContainer from "@/components/home/Sparks";
import StartupsContainer from "@/components/home/Startups";

export default function Home() {
  return (
    <main className="w-full mt-[6.3rem] md:mt-[6.8rem]">
      <div className="md:min-h-screen bg-[url('/svg/header-background.svg')] bg-no-repeat bg-top">
        <Hero />
        <ProjectsContainer />
      </div>
      <StartupsContainer />
      <SparksContainer />
      <ShowcaseContainer />
      <Scale />
      <Blog />
      <CallToAction />
    </main>
  );
}
