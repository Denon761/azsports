export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/cart', '/checkout'],
    },
    sitemap: 'https://azsports.pk/sitemap.xml',
  };
}
