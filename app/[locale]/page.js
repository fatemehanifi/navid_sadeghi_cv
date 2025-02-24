import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import Navbar from '@/components/Navbar/Navbar';
import Hero from "@/components/Hero";

export default function Home() {
  const t = useTranslations('home');
  
  return (
    <div
        className="w-full flex flex-col justify-center items-center overflow-y-auto"
    >
        <Hero />
        <Navbar />
        <div className="h-10">Hello World!</div>
    </div>
  );
}
