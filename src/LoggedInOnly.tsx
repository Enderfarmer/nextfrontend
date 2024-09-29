"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LoggedInOnly = ({ children }: { children: React.ReactNode }) => {
    "use client";
    const [content, setContent] = useState<React.ReactNode | string>("");
    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem("access-token")) {
            setContent(<>{children}</>);
        } else router.push("/");
    }, []);
    return <>{content}</>;
};

export default LoggedInOnly;
