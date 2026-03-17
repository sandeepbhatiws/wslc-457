export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin-panel/'],
    },
    sitemap: 'https://acme.com/sitemap.xml',
  }
}