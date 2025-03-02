import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar/Navbar';
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";

export default function Home() {
  const t = useTranslations('home');
  
  return (
    <div
        className="w-full flex flex-col justify-center items-center"
    >
        <Hero />
        <Navbar />
        <Timeline />
    </div>
  );
}
