
import Filter from "../components/Filter";

function Projects() {
  return (
    <div>
      <h1>Réalisations</h1>

      <div className="a">
        <div className="filter-bar">
        <Filter/>
        </div>
        <div className="projects-container">
          <button>projet1</button>
          <button>projet2</button>
          <button>projet3</button>
          <button>projet4</button>
        </div>
      </div>
    </div>
  );
}
export default Projects;
