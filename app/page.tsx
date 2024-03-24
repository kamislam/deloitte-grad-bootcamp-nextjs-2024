import styles from "./page.module.css";
import { CurrentTime } from "@/types/CurrentTime";

// components
import { ProductsSection } from "./components/ProductsSection";

async function fetchProducts() {
  const response = await fetch("https://dummyjson.com/products?limit=12");

  return response.json();
}

async function fetchCurrentTime() {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Australia/Sydney",
    { cache: "no-store" }
  );

  return response.json();
}

export default async function Home() {
  const { products } = (await fetchProducts()) || {};
  const { datetime }: CurrentTime = (await fetchCurrentTime()) || {};

  return (
    <main className={styles.main}>
      {datetime}
      <section>
        <ProductsSection products={products} />
      </section>
    </main>
  );
}
