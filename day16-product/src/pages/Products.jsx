import { Link } from "react-router-dom";

function Products() {
  const products = [
    { id: 1, name: "Mobile" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "Headphones" },
  ];

  return (
    <div>
      <h2>Products</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
