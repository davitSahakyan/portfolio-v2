import { ColumnInfoItem } from "@/app/interfaces/interfaces";
import { createClient } from 'contentful';

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error('Contentful space ID and access token must be defined in environment variables.');
}

export const client = createClient({
  space,
  accessToken,
});

export async function getEducationData() {
  const entries = await client.getEntries({
    content_type: "educationData",
  });
  return entries.items.map(item => item.fields) as unknown as ColumnInfoItem[];
}

export async function getExperienceData() {
  const entries = await client.getEntries({
    content_type: "experienceData",
  });
  return entries.items.map(item => item.fields) as unknown as ColumnInfoItem[];
}