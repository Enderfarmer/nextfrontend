"use client";
import api from "../src/api";
import "./globals.css";
import { useEffect, useState } from "react";
import Meal from "../src/components/Meal";
import SideBar from "../src/components/SideBar";
import "./styles/index.css";

export default function Home() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check if user is authenticated by looking for tokens
        const accessToken = localStorage.getItem("access-token");
        if (accessToken) {
            const refreshToken = localStorage.getItem("refresh-token");
            setLoading(true);

            api.authget("menus/", {}, accessToken, refreshToken)
                .then((res) => {
                    setData(res.data);
                })
                .catch((err) => {
                    console.error(err);

                    setError(err.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.error(error);
        return <p>An error occurred: {error}</p>;
    }

    if (data.length === 0) {
        return (
            <main className="not-authenticated">
                Our menu management website! Manage your foods and get better
                mealtimes. <a href="/login/">Log in</a> and get started!{" "}
                <a href="/register/">Don't have an account? Register!</a>
            </main>
        );
    }

    return (
        <main className="authenticated">
            <div className="w-5/6 p-4">
                {typeof data.map == "function" &&
                    data.map((menu) => (
                        <div
                            id={`menu-${menu.id}`}
                            key={menu.id}
                            className="menu w-4/6"
                        >
                            <table>
                                <thead>
                                    <tr>
                                        <td className="heading">Mealtime</td>
                                        <td className="heading">Monday</td>
                                        <td className="heading">Tuesday</td>
                                        <td className="heading">Wednesday</td>
                                        <td className="heading">Thursday</td>
                                        <td className="heading">Friday</td>
                                        <td className="heading">Saturday</td>
                                        <td className="heading">Sunday</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Meal
                                        meal="breakfast"
                                        entries={menu.entries}
                                    />
                                    <Meal meal="lunch" entries={menu.entries} />
                                    <Meal
                                        meal="dessert"
                                        entries={menu.entries}
                                    />
                                    <Meal
                                        meal="dinner"
                                        entries={menu.entries}
                                    />
                                </tbody>
                            </table>
                        </div>
                    ))}
            </div>
            {typeof data.map == "function" && <SideBar menus={data} />}
        </main>
    );
}
