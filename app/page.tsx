import styles from "./page.module.css";

// components
import { ProductsSection } from "./components/ProductsSection";
import { CurrentTime } from "@/types/CurrentTime";

async function fetchProducts() {
  const response = await fetch("https://dummyjson.com/products?limit=12");

  return response.json();
}

async function fetchTime() {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Australia/Sydney",
    { next: { revalidate: 5 } }
  );

  return response.json();
}

export default async function Home() {
  const { products } = (await fetchProducts()) || {};
  const { datetime }: CurrentTime = (await fetchTime()) || {};

  return (
    <main className={styles.main}>
      <h1>Current time is: {datetime}</h1>
      <section>
        <ProductsSection products={products} />
      </section>
    </main>
  );
}
