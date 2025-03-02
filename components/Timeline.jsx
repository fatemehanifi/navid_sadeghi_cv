"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Timeline = () => {
    const [activeItem, setActiveItem] = useState(null);

    const experiences = [
        { id: 1, title: "شروع", description: "شروع یادگیری برنامه‌نویسی", position: { x: 50, y: 100 } },
        { id: 2, title: "اولین پروژه", description: "ساخت اولین وبسایت", position: { x: 200, y: 200 } },
        { id: 3, title: "دست‌آورد مهم", description: "شرکت در اولین پروژه تیمی", position: { x: 350, y: 150 } },
    ];

    return (
        <div className="relative w-full flex flex-col justify-center items-center py-10">
            <div className="bg-green-300 rounded-full px-4 py-3">01</div>
            <div className="w-2 h-[220px] border-r-2 border-dashed border-green-900"></div>
            <div className="bg-green-300 rounded-full px-4 py-3">02</div>
            <div className="w-2 h-[220px] border-r-2 border-dashed border-green-900"></div>
            <div className="bg-green-300 rounded-full px-4 py-3">03</div>
            <div className="w-2 h-[220px] border-r-2 border-dashed border-green-900"></div>

            <div className="max-w-[300px] absolute top-10 left-[20%] bg-white p-4 rounded-xl">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </div>
            <div className="max-w-[300px] absolute top-10 right-[20%]">
                <Image src="/navid.jpg" alt={"navid"} width={250} height={100} />
            </div>

            <div className="max-w-[300px] absolute top-[40%] right-[20%] bg-white p-4 rounded-xl">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </div>
            <div className="max-w-[300px] absolute top-[40%] left-[20%]">
                <Image src="/navid.jpg" alt={"navid"} width={250} height={100} />
            </div>
        </div>
    );
};

export default Timeline;