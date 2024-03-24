import styles from "./page.module.css";

// components
import { ProductsSection } from "./components/ProductsSection";

async function fetchProducts() {
  const response = await fetch("https://dummyjson.com/products?limit=12");

  return response.json();
}

export default async function Home() {
  const { products } = (await fetchProducts()) || {};

  return (
    <main className={styles.main}>
      <section>
        <ProductsSection products={products} />
      </section>
    </main>
  );
}
