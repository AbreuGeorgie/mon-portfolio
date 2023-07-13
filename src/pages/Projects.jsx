
import Filter from "../components/Filter";
import MyCard from "../components/MyCard";

function Projects() {
  return (
    <div>
      <header>
        <h1>Mes projets réalisés</h1>
      </header>
      <main>
        <div className="filter-bar">
          <Filter />
        </div>
        <div className="projects-container">
        <MyCard
        cover="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
        title="HTML"
        technologies="HTML/CSS"/>
        </div>
      </main>
    </div>
  );
}
export default Projects;
