import { ogContentType, ogSize, renderInviteImage } from '../_og/inviteImage';
import { coupleNames } from '../wedding.config';

export const alt = `${coupleNames} · Հարսանյաց հրավեր`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderInviteImage();
}
