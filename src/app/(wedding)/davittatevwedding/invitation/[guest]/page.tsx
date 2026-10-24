import type { Metadata } from 'next';
import Invitation from '../../_components/invitation/invitation';
import { greetingWord, parseGuestName } from '../../guest';
import { coupleNames, wedding } from '../../wedding.config';

type GuestPageProps = {
  params: Promise<{ guest: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

async function resolveGuest({ params, searchParams }: GuestPageProps) {
  const [{ guest }, query] = await Promise.all([params, searchParams]);
  return { name: parseGuestName(guest), warm: 'sireli' in query };
}

export async function generateMetadata(props: GuestPageProps): Promise<Metadata> {
  const { name, warm } = await resolveGuest(props);
  if (!name) return {};

  const title = `${greetingWord(warm)} ${name}`;
  const description = `${wedding.invitationText} ${coupleNames} · ${wedding.date.short}`;

  return {
    title: `${title} · ${coupleNames}`,
    description,
    openGraph: {
      type: 'website',
      locale: 'hy_AM',
      siteName: coupleNames,
      title,
      description,
    },
  };
}

export default async function GuestInvitationPage(props: GuestPageProps) {
  const { name, warm } = await resolveGuest(props);
  return <Invitation guestName={name || undefined} warm={warm} />;
}
