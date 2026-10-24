import { INVITATION_PATH, wedding } from './wedding.config';

const MAX_NAME_LENGTH = 80;

// "Կոնստանտին-և-Հերմինե" (raw or percent-encoded) -> "Կոնստանտին և Հերմինե"
export function parseGuestName(raw: string): string {
  let value = raw;
  try {
    value = decodeURIComponent(raw);
  } catch {
    // already decoded, or contains a stray "%"
  }
  return value
    .replace(/[-_+]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, MAX_NAME_LENGTH);
}

export function greetingWord(warm: boolean): string {
  return warm ? wedding.greeting.warm : wedding.greeting.formal;
}

// Keeps Armenian letters readable in the link instead of %D4%BF...
export function invitationPath(name: string, warm: boolean): string {
  const slug = name.trim().replace(/\s+/g, '-');
  return `${INVITATION_PATH}/${slug}${warm ? '?sireli' : ''}`;
}
