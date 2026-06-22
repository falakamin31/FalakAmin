export default function sitemap() {
  // Update this once you deploy (e.g. https://falakamin.com)
  const base = "https://your-domain.com";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
