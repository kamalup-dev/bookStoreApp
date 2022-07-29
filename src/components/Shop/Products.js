import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    id: "p1",
    title: "Joker's Heaven",
    description: "A Dark and Mysterious Villain!",
    price: 5,
  },
  {
    id: "p2",
    title: "Ikigai",
    description: "A Japnease secret to long and happy life.",
    price: 10,
  },
  {
    id: "p3",
    title: "The Kite Runner",
    description: "Gives a glimps of life in Afghanistan in war.",
    price: 8,
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
