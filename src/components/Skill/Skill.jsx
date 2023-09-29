

function Skill({ name, picture, width, height }) {
  return (
    <>
      <div className="mx-3 my-none d-flex flex-column align-items-center">
        <img src={picture} width={width} height={height} alt={name} />
        <figcaption className="figure-caption">
            {name}
        </figcaption>
      </div>
    </>
  );
}

export default Skill;
