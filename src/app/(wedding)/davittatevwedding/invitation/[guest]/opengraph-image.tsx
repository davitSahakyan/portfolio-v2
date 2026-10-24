import { ogContentType, ogSize, renderInviteImage } from '../../_og/inviteImage';
import { parseGuestName } from '../../guest';
import { coupleNames, wedding } from '../../wedding.config';

export const alt = `${coupleNames} · Հարսանյաց հրավեր`;
export const size = ogSize;
export const contentType = ogContentType;

// Next 15.3 passes metadata-image params already resolved
export default function Image({ params }: { params: { guest: string } }) {
  return renderInviteImage(parseGuestName(params.guest) || wedding.greeting.generic);
}
