import styles from "./page.module.css";

// components
import { ProductsSection } from "./components/ProductsSection";

async function fetchProducts() {
  const response = await fetch("https://dummyjson.com/products?limit=12");

  return response.json();
}

async function fetchNote() {
  const response = await fetch(`${process.env.BASE_URL}/api/notes`, {
    next: { revalidate: 5 },
  });

  return response.json();
}

export default async function Home() {
  const { products } = (await fetchProducts()) || {};
  const { message } = (await fetchNote()) || {};

  return (
    <main className={styles.main}>
      {message}
      <section>
        <ProductsSection products={products} />
      </section>
    </main>
  );
}
