import "./Header.scss";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
function RenderHeader() {
  return (
    <header>
      <div className="container container--header">
        <Link to="/home">
          <div className="logo-wrapper">
            <img src={logo} alt="" />
          </div>
        </Link>
        <form action="submit">
          <input type="text" />
          <button type="submit">Пошук</button>
        </form>
      </div>
    </header>
  );
}

export { RenderHeader };
