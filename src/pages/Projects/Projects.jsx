import React, { useState } from "react";
import Filter from "../../components/Filter/Filter";
import MyCard from "../../components/MyCard/MyCard";
import datas from "../../datas.json";
import MyModal from "../../components/Modale/Modale";

function Projects() {
  const [filterCategory, setFilter] = useState("Frontend");
  const handleChange = (e) => {
    setFilter(e);
  };

  const [selectedCardId, setSelectedCardId] = useState(null);

  const toggleShow = (cardId) => {
    setSelectedCardId((prevId) => (prevId === cardId ? null : cardId));
  };

  return (
    <div className="scroll">
      <header className="mb-5">
        <h1>Mes projets réalisés</h1>
      </header>
      <main>
        <section className="filter-bar">
          <Filter change={handleChange} />
        </section>
        <section className="d-flex flex-wrap justify-content-center bg-none">
          {datas
            .filter((card) => card.category === filterCategory)
            .map((card) => (
              <div
                key={`${card.id} - card`}
                className="d-flex flex-wrap justify-content-center bg-none mt-4"
              >
                <MyCard
                  id={card.id}
                  cover={card.cover}
                  title={card.title}
                  technologies={card.technologies}
                  onClick={() => toggleShow(card.id)}
                />
                <MyModal
                  // key={`${card.id} - modale`}
                  title={card.title}
                  description={card.description}
                  context={card.context}
                  technologies={card.technologies}
                  site={card.site}
                  type={card.type}
                  date={card.date}
                  skills={card.skills}
                  pictures={card.pictures}
                  show={selectedCardId === card.id}
                  setShow={() => setSelectedCardId(null)}
                  toggleShow={() => toggleShow(card.id)}
                />
              </div>
            ))}
        </section>
      </main>
    </div>
  );
}

export default Projects;
