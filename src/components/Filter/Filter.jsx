import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function Filter({ change }) {
  return (
    <ToggleButtonGroup
      type="radio"
      name="options"
      defaultValue="Frontend"
      onChange={change}
    >
      <ToggleButton
        id="tbg-radio-1"
        value="Frontend"
        variant="secondary"
        className="text-white"
      >
        <label htmlFor="tbg-radio-1">Frontend</label>
      </ToggleButton>
      <ToggleButton
        id="tbg-radio-2"
        value="Backend"
        variant="secondary"
        className="text-white"
      >
        <label htmlFor="tbg-radio-2">Backend</label>
      </ToggleButton>
      <ToggleButton
        id="tbg-radio-3"
        value="Projet"
        variant="secondary"
        className="text-white"
      >
        <label htmlFor="tbg-radio-3">Gestion de projet</label>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default Filter;
