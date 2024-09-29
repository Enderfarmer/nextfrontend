"use client";

import api from "@/api";
import { Menu } from "@/types";
import { useRouter } from "next/router";

const Page = async ({}) => {
    const router = useRouter();
    const menu: Menu = (
        await api.authget(
            `menus/${router.query.id}`,
            {},
            localStorage.getItem("access-token"),
            localStorage.getItem("refresh-token")
        )
    ).data;
    return <div></div>;
};

export default Page;
