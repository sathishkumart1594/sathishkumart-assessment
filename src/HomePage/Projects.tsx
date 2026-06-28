import ProjectCard from "./ProjectCard";

import portfolio from "../assets/portfolio.png";
import weather from "../assets/weather.png";
import cred from "../assets/cred.png";

const Projects = () => {
  return (
    <section className="bg-[#111111] px-8 py-10">

      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-white text-4xl font-bold">
            Recent Projects
          </h2>

          <button className="text-white hover:text-[#C6FF00]">
            See all →
          </button>

        </div>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >

          <ProjectCard
            image={portfolio}
            title="Portfolio"
            subtitle="Personal Website"
            description="Developed a responsive portfolio website showcasing projects and skills."
          />

          <ProjectCard
            image={weather}
            title="Weather App"
            subtitle="React Project"
            description="Weather forecast application using weather API and React."
          />

          <ProjectCard
            image={cred}
            title="Cred Clone"
            subtitle="Landing Page"
            description="Pixel-perfect clone created using React and Tailwind CSS."
          />

        </div>

      </div>

    </section>
  );
};

export default Projects;