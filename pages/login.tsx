"use client";
import api from "@/api";
import AuthForm from "@/components/AuthForm";
import { useRouter } from "next/router";
import "./globals.css";
import "./styles/float-label.css";
const Page = ({}) => {
    const router = useRouter();
    const handleAuth = async (data: FormData) => {
        const res = await api.post("token/", data);
        localStorage.setItem("access-token", JSON.parse(res.data).access);
        localStorage.setItem("refresh-token", JSON.parse(res.data).refresh);
        router.push("/");
    };
    return <AuthForm action={handleAuth} method="POST" auth="Login" />;
};

export default Page;
