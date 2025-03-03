"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
    { id: 1, title: "Started University", date: "2018" },
    { id: 2, title: "Internship at XYZ", date: "2020" },
    { id: 3, title: "Graduated & First Job", date: "2021" },
    { id: 4, title: "Mid-Level Developer", date: "2023" },
];

const Timeline = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const yValue = useTransform(scrollYProgress, [0, 1], ["0px", "420px"]);


    return (
        <div ref={ref} className="relative flex items-center">
            {/* Progress Line */}
            <motion.div
                className="absolute w-1 bg-gray-300 rounded-lg"
                style={{height: "100%", top: 0}}
            >
                <motion.div
                    className="absolute w-1 bg-indigo-500 rounded-lg"
                    style={{
                        height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                    }}
                />
                <motion.div
                    className="w-5 h-5 bg-indigo-500 rounded-full -ml-2.5 absolute left-1/2 transform -translate-x-1/2"
                    style={{y: yValue}}
                />
            </motion.div>

            {/* Timeline Events */}
            <div className="relative flex flex-col items-start mt-10">
                {experiences.map((exp, index) => {

                    return (
                        <div key={exp.id} className="flex items-center mb-12 animate-fadeDown">
                            {/* Progress Bar Dot (Positioned exactly on the line) */}
                            {/*<motion.div*/}
                            {/*    className="w-5 h-5 bg-indigo-500 rounded-full border-4 border-white shadow-lg absolute left-1/2 transform -translate-x-1/2"*/}
                            {/*    style={{ y: yValue }}*/}
                            {/*/>*/}

                            {/* Experience Details (Shifted to the right of the line) */}
                            <div className="ml-8 text-left">
                                <h3 className="text-lg font-semibold text-gray-800">{exp.title}</h3>
                                <p className="text-gray-600">{exp.date}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;
