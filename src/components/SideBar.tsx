import { Menu } from "@/types";
import { FaPlus } from "react-icons/fa";
const SideBar = ({
    menus = null,
}: {
    menus: Array<Menu> | undefined | null;
}) => {
    console.log(menus);
    let menu_links = [];
    if (menus) {
        for (let result of menus) {
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
    }
    return (
        <nav className="w-1/6 bg-slate-300 p-2">
            <div className="border-b-2 border-blue-950 h-10 mb-4">
                <span className="rounded-full"></span>
            </div>
            {menu_links.length != 0
                ? menu_links
                : "You haven't created any menus."}
        </nav>
    );
};

export default SideBar;
