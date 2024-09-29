"use server";
import api from "./api";
import { redirect } from "next/navigation";
export const handleAuth = async (data: FormData) => {
    "use server";
    const res = await api.post("token/", data);
    console.log(res);
    localStorage.setItem("access-token", res.data.access);
    localStorage.setItem("refresh-token", res.data.refresh);
    redirect("/");
};
