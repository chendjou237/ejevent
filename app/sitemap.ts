import { getDecorations } from "@/server/queries"

export default async function sitemap() {
   const baseUrl = "https://ejevent.co"
   const response = (await getDecorations()).map((decoration) => ({
      url: `${baseUrl}/decorations/${decoration.slug}`,
      lastModified: decoration.updated_at,
   }))
  return [
   {
      url: baseUrl,
      lastModified: new Date(),
   },
   ...response,
]
}