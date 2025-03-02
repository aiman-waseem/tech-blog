// sanity.js
import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'



export const client = createClient({
    projectId: 'mmx6uc7i',
    dataset: 'production',
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2024-05-26', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })

  
// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
 export function urlFor(source:any) {
  return builder.image(source)
}