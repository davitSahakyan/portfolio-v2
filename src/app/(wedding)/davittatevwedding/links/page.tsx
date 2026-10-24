import type { Metadata } from 'next';
import LinkBuilder from '../_components/linkBuilder/linkBuilder';

export const metadata: Metadata = {
  title: 'Հրավերի հղումներ',
};

export default function LinksPage() {
  return <LinkBuilder />;
}
