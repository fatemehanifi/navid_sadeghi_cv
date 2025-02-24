export default function Hero() {
    return (
        <div className="relative w-full h-svh bg-[url(/background.png)] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-8 text-white"
        >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="relative z-10 flex flex-col gap-6 items-center justify-center h-full">
                <h1 className="text-3xl font-bold animate-fadeDown">
                    نوید صادقی آزاد
                </h1>
                <p className="text-lg animate-fadeDown [animation-delay:200ms]">
                    توسعه دهنده کسب و کار
                </p>
                <p className="text-lg animate-fadeDown [animation-delay:400ms]">
                    مسیر شغلی و تحصیلی من
                </p>
            </div>
        </div>
    )
}