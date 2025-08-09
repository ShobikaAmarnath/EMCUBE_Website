import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: '47l4rrvd',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export const fetchServicesList = async () => {
  const query = `*[_type == "services"] | order(order asc) {
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
  return await client.fetch(query);
};

export const fetchServiceDetails = async () => {
  const query = `
      *[_type == "services"]{
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
      benefits,
      offerings
    }
  },
  sections[]{
    title,
    slug,
    description,
    type,
    icon{ asset->{url} },
    content[]{
      ...,
      _type == "block" => {
        children[]{ text }
      }
    }
  }
}

    `;
  return await client.fetch(query);
};

export const fetchContactDetails = async () => {
  const query = `*[_type == "contactDetails"][0]{
    footerAbout,
    emails,
    phoneNumbers,
    address
  }`;
  return await client.fetch(query);
};

export default client;
