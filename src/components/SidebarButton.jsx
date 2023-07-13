import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Sidebar.scss";

export function SidebarButton({text, buttonText}) {
  const navigate = useNavigate();
  function handleClick(path) {
    navigate(path);
  }
  return (
    <Button variant="secondary" size="lg" className="text-white mt-3" onClick={() => handleClick(`/${buttonText}`)}>
      {text}
    </Button>
  );
}
