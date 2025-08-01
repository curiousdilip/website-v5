export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const baseUrl = 'https://dilipmaurya.in';


  const staticRoutes = ['', '/about', '/contact', '/work', '/resume'];


  const projectUrl = 'https://api.cosmicjs.com/v3/buckets/my-website-website/objects?pretty=true&query=%7B%22type%22:%22works%22%7D&limit=100&skip=0&read_key=n3jLniptSDz6sl6YWVXuEict2MsOxs3jN3sxxFOBg2vY8d0NIE&depth=1&props=slug,title,metadata,type';
  const projectRes = await fetch(projectUrl);
  const projectData = await projectRes.json();
  const projects = projectData.objects || [];


  const allRoutes = [
    ...staticRoutes,
    ...projects.map((project) => `/work/${project.slug}`),
  ];


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `<url>
  <loc>${baseUrl}${route}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>`
    )
    .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}
