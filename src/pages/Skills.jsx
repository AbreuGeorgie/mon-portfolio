import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';


function Skills() {
  return (
    <div>
      <header>
        <h1>Mes compétences</h1>
      </header>
      <main className="skills">
      <Stack direction="horizontal" gap={2}>
        <Badge pill bg="secondary">HTML/CSS</Badge>
        <Badge pill bg="secondary">JS</Badge>
        <Badge pill bg="secondary">REACTJS</Badge>
        <Badge pill bg="secondary">NODE.JS</Badge>
        <Badge pill bg="secondary">MONGODB</Badge>
        <Badge pill bg="secondary">TRELLO</Badge>
        <Badge pill bg="secondary">FIGMA</Badge>
        <Badge pill bg="secondary">GITHUB</Badge>
        </Stack>

      </main>
    </div>
  );
}
export default Skills;
