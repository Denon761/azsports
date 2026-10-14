import { products, accessories, standProduct } from './data/products';

const BASE_URL = 'https://azsports.pk';

const staticPages = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/shop', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/rules', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/maintenance', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/shipping', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.2, changeFrequency: 'yearly' },
  { path: '/cookies', priority: 0.2, changeFrequency: 'yearly' },
];

export default function sitemap() {
  const lastModified = new Date();

  const pages = staticPages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const productPages = [...products, ...accessories, standProduct].map((product) => ({
    url: `${BASE_URL}/shop/${product.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...pages, ...productPages];
}
