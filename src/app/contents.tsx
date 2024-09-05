"use client";
import { Menu } from "@/types";
import Meal from "./Meal";
import SideBar from "@/components/SideBar";

export default function Contents({ data }: { data: Array<Menu> }) {
    return (
        <main className="flex w-full">
            <div className="w-5/6">
                {data.map((menu: Menu) => (
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
            <SideBar menus={data} />
        </main>
    );
}
