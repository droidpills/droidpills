export const baseUrl = 'https://droidpills.com';

export default async function sitemap() {

  const routes = ['', 'blog', 'projects', 'about'].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
