import localFont from "next/font/local";

const iranSansFont = localFont({
    src: [
        {
            path: "../public/fonts/IRANSansX-Thin.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "../public/fonts/IRANSansX-UltraLight.woff2",
            weight: "200",
            style: "normal",
        },
        {
            path: "../public/fonts/IRANSansX-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/IRANSansX-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/IRANSansX-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/IRANSansX-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/IRANSansX-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/fonts/IRANSansX-ExtraBold.woff2",
            weight: "800",
            style: "normal",
        },
        {
            path: "../public/fonts/IRANSansX-Black.woff2",
            weight: "900",
            style: "normal",
        },
        {
            path: "../public/fonts/IRANSansX-ExtraBlack.woff2",
            weight: "950",
            style: "normal",
        },
        {
            path: "../public/fonts/IRANSansXFaNum-Medium.woff2",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-iranSansFont",
    display: "swap",
});

export default iranSansFont;
