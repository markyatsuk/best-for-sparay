import { Link } from "react-router-dom";
function RenderProducts({ products }) {
  return products.map((product) => {
    return (
      <li key={product.id} className="product__item">
        {product.linkPath ? (
          <Link
            to={product.id + "/" + product.linkPath}
            className="productLink"
          >
            <div className="img-container">
              <img
                src={product.src}
                alt={product.name}
                className="productImg"
              />
            </div>
            <div className="name-container">
              <p className="productName">{product.name}</p>
            </div>
          </Link>
        ) : (
          <a href={product.linkToWebsite} className="linkToWebsite">
            <div className="img-container">
              <img
                src={product.src}
                alt={product.name}
                className="productImg"
              />
            </div>
            <div className="name-container">
              <p className="productName">{product.name}</p>
            </div>
          </a>
        )}
      </li>
    );
  });
}
export default RenderProducts;
