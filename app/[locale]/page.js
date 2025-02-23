import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/Navbar';

export default function Home() {
  const t = useTranslations('home');
  
  return (
    <div className="w-full h-svh flex flex-col justify-center items-center">
      <Navbar />
      <h1>{t('title')}</h1>
      <Link href="/about">{t('description')}</Link>
    </div>
  );
}
