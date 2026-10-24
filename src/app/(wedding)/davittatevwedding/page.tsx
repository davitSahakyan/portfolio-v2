import { redirect } from 'next/navigation';
import { INVITATION_PATH } from './wedding.config';

export default function WeddingPage() {
  redirect(INVITATION_PATH);
}
