import Badge from "react-bootstrap/Badge";

function Skill({ name, picture, width, height }) {
  return (
    <>
      <div>
        <img src={picture} width={width} height={height} alt={name} />
        <figcaption className="figure-caption">
          <Badge pill bg="secondary">
            {name}
          </Badge>
        </figcaption>
      </div>
    </>
  );
}

export default Skill;
