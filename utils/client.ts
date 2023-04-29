import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '4tv2cmjy',
  dataset: 'production',
  apiVersion: '2023-04-29',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
