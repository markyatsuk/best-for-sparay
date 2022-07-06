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
            <img src={product.src} alt={product.name} className="productImg" />
            <p className="productName">{product.name}</p>
          </Link>
        ) : (
          <a href={product.linkToWebsite}>
            <img src={product.src} alt={product.name} className="productImg" />
            <p className="productName">{product.name}</p>
          </a>
        )}
      </li>
    );
  });
}
export default RenderProducts;
