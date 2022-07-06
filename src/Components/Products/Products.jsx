import "./Products.scss";
import RenderProducts from "./RenderProducts";

function Products({ products }) {
  return (
    <main className="main">
      <div className="container">
        <ul className="product-list">
          <RenderProducts products={products} />
        </ul>
      </div>
    </main>
  );
}

export { Products };
