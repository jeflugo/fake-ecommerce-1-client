import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
	projectId: '9254aur0',
	dataset: 'production',
	apiVersion: '2024-05-20',
	useCdn: true,
	token: import.meta.env.VITE_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)
