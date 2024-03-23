import styles from "./ProductsSection.module.css";
import Link from "next/link";
import { Product } from "@/types/Product";
import Image from "next/image";

// mantine
import { Button, Paper, Rating, SimpleGrid, Text, Title } from "@mantine/core";

const ProductsSection = ({ products }: { products: Product[] }) => {
  return (
    <SimpleGrid cols={{ base: 2, sm: 4 }}>
      {products?.map(({ id, title, price, thumbnail, rating }) => (
        <Paper key={id} withBorder className={styles.productItem}>
          <div className={styles.thumbnailContainer}>
            <Image
              className={styles.thumbnail}
              src={thumbnail}
              alt={title}
              fill
            />
          </div>
          <section className={styles.content}>
            <div>
              <Link href={`/products/${id}`} className={styles.link}>
                <Title order={2}>{title}</Title>
              </Link>
              <Text size="xl">${price}</Text>
              <Rating value={rating} readOnly m={"auto"} />
            </div>
            <Button mt={20} component={Link} href={`/products/${id}`} fullWidth>
              See Details
            </Button>
          </section>
        </Paper>
      ))}
    </SimpleGrid>
  );
};

export default ProductsSection;
