import api from "@/api";
import { Menu } from "@/types";
import Link from "next/link";
import { BiFoodMenu, BiLogOut, BiTrash } from "react-icons/bi";
import { FaPlus, FaPencilAlt } from "react-icons/fa";
const SideBar = ({
    menus = null,
}: {
    menus: Array<Menu> | undefined | null;
}) => {
    let ICON_SIZE = "1.25em";
    let menu_links = [];
    if (menus) {
        for (let result of menus) {
            menu_links.push(
                <div className="flex text-center items-center" key={result.id}>
                    <BiFoodMenu className="text-black" size={ICON_SIZE} />
                    <a
                        href={`#menu-${result.id}`}
                        className="text-cyan-800 flex items-center ml-3 shadow-sm shadow-blue-200"
                        key={result.id}
                    >
                        {result.name}
                    </a>
                    <Link
                        href={`/edit/${result.id}`}
                        title="Edit menu"
                        className="text-black hover:text-blue-800 hover:scale-125 m-2"
                    >
                        <FaPencilAlt size={ICON_SIZE} />
                    </Link>
                    <BiTrash
                        size={ICON_SIZE}
                        className="text-red-700 hover:text-red-500  hover:scale-125"
                        onClick={function (e) {
                            api.authdelete(
                                `menus/${result.id}/`,
                                {},
                                localStorage
                            );
                        }}
                        title="Delete menu"
                    />
                </div>
            );
        }
    }
    return (
        <nav className="w-1/6 bg-slate-300 p-2 relative" id="sidebar">
            <div className="border-b-2 border-blue-950 h-10 mb-4">
                Your Menus
                <Link href={"/create/"}>
                    <button className="ml-2 rounded-full border border-slate-400 p-2 active:bg-slate-400 active:text-emerald-300 text-emerald-500">
                        <i>
                            <FaPlus />
                        </i>
                    </button>
                </Link>
            </div>
            <div id="menus-list">
                {menu_links.length != 0
                    ? menu_links
                    : "You haven't created any menus."}
            </div>
            <div className="border-t-2 border-blue-950 bottom-0 absolute p-4 w-11/12">
                <Link href={"/logout/"}>
                    <BiLogOut className="inline" /> Log out
                </Link>
            </div>
        </nav>
    );
};

export default SideBar;
