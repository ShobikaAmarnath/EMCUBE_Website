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

  const fetchServices = async () => {
    const servicesQuery = `*[_type == "services"]{
        title,
        slug,
        overview,
        image{ asset->{url} },
        service[]{
          title,
          description,
          cards[]{
            title,
            description,
            image{ asset->{url} },
          }
        },
        sections[]{
          title, // e.g. "What is JD Edwards?", "Key Benefits"
          slug
        }
      }`;
    try {
    return await client.fetch(servicesQuery);
  } catch (error) {
    console.error('Failed to fetch services:', error);
    return [];
  }
  };

export default client 
export { client, urlFor, fetchServices };    