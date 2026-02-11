import Product from "./Product";

function ProductList() {
  const products = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Laptop", price: 55000 },
    { id: 3, name: "Tablet", price: 25000 }
  ];

  return (
    <div>
      {products.map((item) => (
        <Product
          key={item.id}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
