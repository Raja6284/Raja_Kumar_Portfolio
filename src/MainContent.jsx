import About from "./Components/About.jsx";
import Experience from "./Components/Experience.jsx";
import Projects from "./Components/Projects.jsx";
import EducationShowcase from "./Components/Education.jsx";

const MainContent = () => {
  return (
    <div className="space-y-20">
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="educations">
        <EducationShowcase />
      </section>
    </div>
  );
};

export default MainContent;