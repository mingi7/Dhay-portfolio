'use client';

// حذفنا كل شيء له علاقة بـ framer-motion لتجنب الـ Build Error
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          
          <h1 className="h1">
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </h1>

          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            Lorem ipsum dolor sit amet.
          </p>

          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <div className="hidden xl:flex">
            <ProjectsBtn />
          </div>
        </div>
      </div>
      
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden="true"
        />
        <ParticlesContainer />
        <Avatar />
      </div>
    </div>
  );
};

export default Home;