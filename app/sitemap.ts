import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.maquental.cl',
      lastModified: new Date(),
    },
  ]
}