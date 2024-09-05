"use client";
import "@/styles/Home.css";
import api from "@/api";
import SideBar from "@/components/SideBar";
import { MenuEntries, MenuEntry, Menu } from "@/types";

function Meal({
    meal,
    entries,
}: {
    meal: keyof MenuEntry;
    entries: MenuEntries;
}) {
    return (
        <tr>
            <td className="heading">{meal}</td>
            <td>{entries.monday?.[meal] || "Meal not specified"}</td>
            <td>{entries.tuesday?.[meal] || "Meal not specified"}</td>
            <td>{entries.wednesday?.[meal] || "Meal not specified"}</td>
            <td>{entries.thursday?.[meal] || "Meal not specified"}</td>
            <td>{entries.friday?.[meal] || "Meal not specified"}</td>
            <td>{entries.saturday?.[meal] || "Meal not specified"}</td>
            <td>{entries.sunday?.[meal] || "Meal not specified"}</td>
        </tr>
    );
}

export default async function Home() {
    const response = await api.get("menus/", {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI1NTUzOTIxLCJpYXQiOjE3MjU1NDY3MjEsImp0aSI6IjRkYTEwMTE1MjRlNzRmN2M4M2Q1ODkyZDFiM2ViMzUyIiwidXNlcl9pZCI6Mn0.cKgiW7kvOGru3mumS_kITrrmO7gWK6HKprDbypmnRuw",
        },
    });
    const results: Array<Menu> = response.data;

    return (
        <main className="flex w-full">
            <div className="w-5/6">
                {results.map((menu) => (
                    <div id={`menu-${menu.id}`} key={menu.id} className="menu">
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
            <SideBar menus={results} />
        </main>
    );
}
