import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export async function getEducationData() {
  const entries = await client.getEntries({
    content_type: "educationData",
  });
  return entries.items.map(item => item.fields);
}

export async function getExperienceData() {
  const entries = await client.getEntries({
    content_type: "experienceData",
  });
  return entries.items.map(item => item.fields);
}