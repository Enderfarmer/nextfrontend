"use client";
import LoggedInOnly from "@/LoggedInOnly";
import { useRouter } from "next/router";

const Actions = () => {
    "use client";
    const router = useRouter();
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    router.push("/");
    return <div></div>;
};
const Logout = () => {
    return (
        <LoggedInOnly>
            <Actions />
        </LoggedInOnly>
    );
};
export default Logout;
