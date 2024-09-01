import { NextPage } from "next";
import api from "../api";

const SideBar: NextPage = async ({}) => {
    const results = await api.get("menus/");
    let menus = [];
    for (let result of results.data) {
        menus.push(
            <a href={`#${result.id}`} className="block text-cyan-300">
                {result.name}
            </a>
        );
    }
    return <nav className="w-2/6">{menus}</nav>;
};

export default SideBar;
