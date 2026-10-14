import { getProductBySlug } from '../../data/products';
import ProductDetail from './ProductDetail';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found | AZ Sports' };
  }

  const title = product.category === 'boards'
    ? `${product.name} – ${product.type} Carrom Board`
    : product.name;

  return {
    title: `${title} | AZ Sports`,
    description: product.description,
  };
}

export default function ProductPage() {
  return <ProductDetail />;
}
