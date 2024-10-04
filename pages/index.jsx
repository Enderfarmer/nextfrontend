"use client";
import api, { NotAuthenticated } from "../src/api";
import "./globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Meal from "../src/components/Meal";
import SideBar from "../src/components/SideBar";
import "./styles/index.css";

export default function Home() {
    let [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
    const router = useRouter();
    useEffect(() => {
        // Check if user is authenticated by looking for tokens

        if (localStorage.getItem("access-token")) {
            setLoading(true);
            api.authget("menus/", {}, localStorage)
                .then((res) => {
                    setData(res.data);
                    setAuthenticated(true);
                })
                .catch((err) => {
                    router.push("/login/");
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);
    console.log(data, authenticated);
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!authenticated) {
        return (
            <main className="not-authenticated">
                Our menu management website! Manage your foods and get better
                mealtimes. <a href="/login/">Log in</a> and get started!{" "}
                <a href="/register/">Don't have an account? Register!</a>
            </main>
        );
    }
    data = JSON.parse(data);
    if (!location.href.includes("#menu-")) {
        open(`/#menu-${data[0].id}`);
        close();
    }
    return (
        <main className="authenticated">
            <div className="w-11/12 p-4">
                {data.map((menu) => (
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
                                <Meal meal="breakfast" entries={menu.entries} />
                                <Meal meal="lunch" entries={menu.entries} />
                                <Meal meal="dessert" entries={menu.entries} />
                                <Meal meal="dinner" entries={menu.entries} />
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
            <SideBar menus={data} />
        </main>
    );
}
