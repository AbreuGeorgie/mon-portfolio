import ProjectsCarousel from "../components/Carousel";
import Filter from "../components/Filter";

function Projects() {
  return (
    <div>
      <header>
        <h1>Réalisations</h1>
      </header>
      <main>
        <div className="filter-bar">
          <Filter />
        </div>
        <div className="projects-container">
        <ProjectsCarousel/>
        </div>
      </main>
    </div>
  );
}
export default Projects;
