import { useTranslations } from "next-intl";

import NavbarItem from "@/components/Navbar/NavbarItem";

export default function NavbarItemsList() {
    const t = useTranslations("navbar")

    return (
        <ul className="flex flex-col md:flex-row md:justify-center md:items-center justify-start items-start gap-4">
            <NavbarItem title={t("achievements")} target="#" />
            <NavbarItem title={t("contact_us")} target="#" />
            <NavbarItem title={t("communication")} target="#" />
        </ul>
    )
}