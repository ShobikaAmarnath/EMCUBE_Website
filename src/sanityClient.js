import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';
const client = createClient({
  projectId: '47l4rrvd',    
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})
 const builder=imageUrlBuilder(client);
 const urlFor=(source) => builder.image(source);

export default client 
export { client, urlFor }    