import { createClient } from 'next-sanity';
// import createImageUrlBuilder from '@sanity/image-url';

export const config = {
  dataset: 'production',
  projectId: 'tueg170a',
  apiVersion: '2022-12-21',
  useCdn: false,
};

export const sanityClient = createClient(config);

// export const urlFor = (source) => createImageUrlBuilder(config).image(source);
