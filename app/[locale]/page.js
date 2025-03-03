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
        <div className="w-full -z-10 opacity-50 flex-col justify-center items-center flex fixed inset-y-[26%] inset-x-0">
            <img src={"/navid.svg"} alt={"logo"} className="w-full" />
        </div>
        <Navbar />
        <Hero />
        <Timeline />
        <Hero />
    </div>
  );
}
