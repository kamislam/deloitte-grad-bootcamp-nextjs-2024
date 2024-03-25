import styles from "./ProductDetails.module.css";

async function fetchProductData(id: string) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  return response.json();
}

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const productData = await fetchProductData(params?.id);

  return (
    <main className={styles.main}>
      <h1>{JSON.stringify(productData)}</h1>
    </main>
  );
}
