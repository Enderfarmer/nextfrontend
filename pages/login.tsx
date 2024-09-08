"use client";
import api from "@/api";
import AuthForm from "@/components/AuthForm";
import { useRouter } from "next/router";

const Page = ({}) => {
    const router = useRouter();
    const handleAuth = async (data: FormData) => {
        const res = await api.post("token/", data);
        localStorage.setItem("access-token", res.data.access);
        localStorage.setItem("refresh-token", res.data.refresh);
        router.push("/");
    };
    return (
        <main>
            <AuthForm action={handleAuth} method="POST" auth="Login" />
        </main>
    );
};

export default Page;
