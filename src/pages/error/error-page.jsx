import { Link } from "react-router-dom";
import "./error-page.scss";

export default function ErrorPage() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="error">
        <p className="number">404</p>
        <p className="text_error">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="link_error">
          <p className="text-danger">Retourner sur la page d'accueil</p>
        </Link>
      </div>
    </div>
  );
}
