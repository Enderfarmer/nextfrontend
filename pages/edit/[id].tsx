"use client";

import api from "@/api";
import { FormGroup } from "react-bootstrap";
import SideBar from "@/components/SideBar";
import "../styles/edit/id.css";
import "../styles/menu-tabs.css";
import "../styles/float-label.css";
import { Menu } from "@/types";
import "../globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page = ({}) => {
    const router = useRouter();
    let [data, setData] = useState<null | string | Menu[]>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            api.authget("menus/", {}, localStorage)
                .then((res) => {
                    setData(res.data);
                })
                .catch((err) => {
                    router.push("/login/");
                })
                .finally(() => {
                    setLoading(false);
                });
        } catch (err) {
            router.push("/login/");
        }
    }, []);
    let menu: Menu;
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>An error occured: {error}</div>;
    }
    for (let i of data as Array<Menu>) {
        if (i.id === (router.query.id as string | number)) {
            menu = i;
        }
    }
    return (
        <main className="flex">
            <div className="h-full w-10/12">
                <div>
                    <span>
                        <a href="#mon">Monday</a>
                    </span>
                    <span>
                        <a href="#tue">Tuesday</a>
                    </span>
                    <span>
                        <a href="#wed">Wednesday</a>
                    </span>
                    <span>
                        <a href="#thu">Thursday</a>
                    </span>
                    <span>
                        <a href="#fri">Friday</a>
                    </span>
                    <span>
                        <a href="#sat">Saturday</a>
                    </span>
                    <span>
                        <a href="#sun">Sunday</a>
                    </span>
                </div>
                <div className="w-full h-60 bg-amber-600 tabs">
                    <div id="mon">
                        <FormGroup className="input-field">
                            <input type="text" className="breakfast" />

                            <label>Frühstück</label>
                        </FormGroup>
                        <FormGroup className="input-field">
                            <input type="text" className="lunch" />
                            <label>Mittagessen</label>
                        </FormGroup>
                        <FormGroup className="input-field">
                            <input type="text" className="dessert" />
                            <label>Dessert</label>
                        </FormGroup>
                        <FormGroup className="input-field">
                            <input type="text" className="dinner" />
                            <label>Abendessen</label>
                        </FormGroup>
                    </div>
                    <div id="tue">
                        <input type="text" className="breakfast" />
                        <input type="text" className="lunch" />
                        <input type="text" className="dessert" />
                        <input type="text" className="dinner" />
                    </div>
                    <div id="wed">
                        <input type="text" className="breakfast" />
                        <input type="text" className="lunch" />
                        <input type="text" className="dessert" />
                        <input type="text" className="dinner" />
                    </div>
                    <div id="thu">
                        <input type="text" className="breakfast" />
                        <input type="text" className="lunch" />
                        <input type="text" className="dessert" />
                        <input type="text" className="dinner" />
                    </div>
                    <div id="fri">
                        <input type="text" className="breakfast" />
                        <input type="text" className="lunch" />
                        <input type="text" className="dessert" />
                        <input type="text" className="dinner" />
                    </div>
                    <div id="sat">
                        <input type="text" className="breakfast" />
                        <input type="text" className="lunch" />
                        <input type="text" className="dessert" />
                        <input type="text" className="dinner" />
                    </div>
                    <div id="sun">
                        <input type="text" className="breakfast" />
                        <input type="text" className="lunch" />
                        <input type="text" className="dessert" />
                        <input type="text" className="dinner" />
                    </div>
                </div>
            </div>
            <SideBar menus={data} />
        </main>
    );
};

export default Page;
