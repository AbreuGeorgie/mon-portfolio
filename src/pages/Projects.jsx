import React, { useState } from 'react';
import Filter from "../components/Filter";
import MyCard from "../components/MyCard";
import datas from "../datas.json";
import { Link } from "react-router-dom";

function Projects() {
  const [filterCategory, setFilter] = useState("Frontend");
  const handleChange = (e) =>{
    setFilter(e)
  }
  console.log(filterCategory)

  return (
    <div>
      <header className="mb-5">
        <h1>Mes projets réalisés</h1>
      </header>
      <main> 
        <section className="filter-bar">
          <Filter change={handleChange}/>
        </section>

        <section className="d-flex flex-wrap justify-content-center bg-none mt-4">
          {datas.filter(card => card.category === filterCategory).map((card) => (
            <Link to={card.site} className="projectCard" key={card.id}>
              <MyCard
                cover={card.cover}
                title={card.title}
                technologies={card.technologies}
              />
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
export default Projects;
