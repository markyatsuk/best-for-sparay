import "./Header.scss";
function RenderHeader() {
  return (
    <header>
      <a href="ds">
        <img src="./logo.png" alt="" width={50} />
      </a>
      <form action="submit">
        <input type="text" />
        <button type="submit">Пошук</button>
      </form>
    </header>
  );
}

export { RenderHeader };
