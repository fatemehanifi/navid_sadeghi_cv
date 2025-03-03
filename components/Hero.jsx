import Image from "next/image";

export default function Hero() {
    return (
        <div className="w-full h-svh flex flex-col gap-10 text-black pt-10"
        >
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10 px-20 animate-fadeDown">
                <Image src="/navid.jpg" alt="navid" width={400} height={400} className="rounded-full" />
                <div className="lg:max-w-[500px] max-w-[450px] flex flex-col gap-1 items-start justify-center h-full bg-opacity-50">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold  bg-gradient-to-r from-indigo-700 to-blue-400 bg-clip-text text-transparent">
                        Navid Sadeghi Azad
                    </h1>
                    <p className="text-lg">
                        Business Developer
                    </p>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit at accumsan cursus cursus sapien senectus arcu hendrerit inceptos.
                        Quam etiam primis dictum odio imperdiet enim hendrerit ad. Fusce tincidunt varius in elementum elit faucibus iaculis ullamcorper.
                        Eros magna ullamcorper sapien est felis commodo phasellus auctor. Tincidunt aenean enim tortor venenatis mollis sem in nisl.
                    </p>
                </div>
            </div>


            <div className="max-w-[500px] flex flex-col gap-2 justify-center items-center mx-auto">
                <h1>Trusted by</h1>
                <div className="relative overflow-hidden w-full h-24">
                    {/* The scrolling container with custom animation */}
                    <div className="inline-block whitespace-nowrap animate-marquee">
                        {/* Replace these example images with your own */}
                        <Image
                            src="/logo.svg"
                            alt="Icon 1"
                            width={80}
                            height={20}
                            className="inline-block h-20 align-middle mr-8"
                        />
                        <Image
                            src="/logo.svg"
                            alt="Icon 2"
                            width={80}
                            height={20}
                            className="inline-block h-20 align-middle mr-8"
                        />
                        <Image
                            src="/logo.svg"
                            alt="Icon 3"
                            width={80}
                            height={20}
                            className="inline-block h-20 align-middle mr-8"
                        />
                        <Image
                            src="/logo.svg"
                            alt="Icon 3"
                            width={80}
                            height={20}
                            className="inline-block h-20 align-middle mr-8"
                        />
                        <Image
                            src="/logo.svg"
                            alt="Icon 3"
                            width={80}
                            height={20}
                            className="inline-block h-20 align-middle mr-8"
                        />
                    </div>
                    {/* Left blur overlay */}
                    {/*<div className="pointer-events-none absolute top-0 left-0 w-24 h-full*/}
                    {/*  bg-gradient-to-r from-blue/5 to-transparent*/}
                    {/*  backdrop-blur-sm" />*/}

                    {/*/!* Right blur overlay *!/*/}
                    {/*<div className="pointer-events-none absolute top-0 right-0 w-24 h-full*/}
                    {/*  bg-gradient-to-l from-blue/5 to-transparent*/}
                    {/*  backdrop-blur-sm" />*/}
                </div>
            </div>

        </div>
    )
}