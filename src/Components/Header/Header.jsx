import "./Header.scss";
import logo from "./logo.png";
function RenderHeader() {
  return (
    <header>
      <a href="ds">
        <img src={logo} alt="" />
      </a>
      <form action="submit">
        <input type="text" />
        <button type="submit">Пошук</button>
      </form>
    </header>
  );
}

export { RenderHeader };
