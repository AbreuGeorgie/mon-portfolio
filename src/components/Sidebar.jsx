import { NavLink } from "react-router-dom";
import avatar from "../assets/avatar.png"

function Sidebar() {
  return (
    <div>
      <div>
        <img src={avatar} alt="avatar"></img>
      </div>
      <ul className="navigation">
        <li>
          <NavLink to="/" >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" >
            A propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" >
            Compétences
          </NavLink>
        </li>
        <li>
          <NavLink to="projects" >
            Réalisations
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
