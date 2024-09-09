"use client";
import api from "@/api";
import "./globals.css";
import { useEffect, useState } from "react";
import Meal from "../src/components/Meal";
import SideBar from "../src/components/SideBar";

export default function Home() {
    // Step 1: Retrieve the item from localStorage
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        try {
            api.authget(
                "menus/",
                {},
                localStorage.getItem("access-token"),
                localStorage.getItem("refresh-token")
            )
                .then((res) => res.data)
                .then((data) => {
                    setData(data);
                });
        } catch (err) {
            const errorr = err;
            console.log(error);
            setError(errorr.message);
        } finally {
            setLoading(false);
        }
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>An error occured!</p>;
    return (
        <main className="flex w-full">
            <div className="w-5/6 p-4">
                {data.length != 0
                    ? data.map((menu) => (
                          <div
                              id={`menu-${menu.id}`}
                              key={menu.id}
                              className="menu"
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
                                      <Meal
                                          meal="lunch"
                                          entries={menu.entries}
                                      />
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
                      ))
                    : "No menu to display"}
            </div>
            <SideBar menus={data} />
        </main>
    );
}
