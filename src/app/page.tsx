"use client";
import "@/styles/Home.css";
import api from "@/api";
import Contents from "./contents";
import { useEffect, useState } from "react";

export default function Home() {
    let [data, setData] = useState(null);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        api.get("http://127.0.0.1:8000/api/menus/", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
        }).then((res) => {
            setLoading(false);
            setData(res.data);
        });
    }, []);
    if (loading) return <main className="text-center">Loading...</main>;
    return <Contents data={data} />;
}
