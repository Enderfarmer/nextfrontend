import { Menu } from "@/types";
import Link from "next/link";
import { BiFoodMenu } from "react-icons/bi";
import { FaPlus, FaPencilAlt } from "react-icons/fa";
const SideBar = ({
    menus = null,
}: {
    menus: Array<Menu> | undefined | null;
}) => {
    let menu_links = [];
    if (menus) {
        for (let result of menus) {
            menu_links.push(
                <a
                    href={`#menu-${result.id}`}
                    className="text-cyan-800 flex items-center ml-3 shadow-sm shadow-blue-200"
                    key={result.id}
                >
                    <BiFoodMenu width={30} />
                    {result.name}
                    <FaPencilAlt />
                </a>
            );
        }
    }
    return (
        <nav className="w-1/6 bg-slate-300 p-2">
            <div className="border-b-2 border-blue-950 h-10 mb-4">
                Your Menus
                <Link href={"/login/"}>
                    <button className="ml-2 rounded-full border border-slate-400 p-2 active:bg-slate-400 active:text-emerald-300 text-emerald-500">
                        <i>
                            <FaPlus />
                        </i>
                    </button>
                </Link>
            </div>
            {menu_links.length != 0
                ? menu_links
                : "You haven't created any menus."}
        </nav>
    );
};

export default SideBar;
