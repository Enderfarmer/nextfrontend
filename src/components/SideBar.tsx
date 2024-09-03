import { NextPage } from "next";
import api from "../api";

const SideBar: NextPage = async ({}) => {
    const results = await api.get("menus/");
    let menu_links = [];
    for (let result of results.data) {
        menu_links.push(
            <a
                href={`#menu-${result.id}`}
                className="text-cyan-800 flex items-center ml-3 shadow-sm shadow-blue-200"
                key={result.id}
            >
                <img
                    src="https://icons.iconarchive.com/icons/icons8/ios7/48/Food-Cutlery-icon.png"
                    alt=""
                    className="my-3"
                    width={30}
                />
                {result.name}
            </a>
        );
    }

    return <nav className="w-1/6 bg-slate-300">{menu_links}</nav>;
};

export default SideBar;
