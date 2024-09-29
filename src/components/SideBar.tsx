import { Menu } from "@/types";
import Link from "next/link";
import { BiFoodMenu, BiLogOut } from "react-icons/bi";
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
                <div className="flex text-center items-center" key={result.id}>
                    <BiFoodMenu className="w-7 text-black" width={30} />
                    <a
                        href={`#menu-${result.id}`}
                        className="text-cyan-800 flex items-center ml-3 shadow-sm shadow-blue-200"
                        key={result.id}
                    >
                        {result.name}
                    </a>
                    <Link href={`/edit/${result.id}`}>
                        <FaPencilAlt
                            className="w-7 text-black hover:text-blue-950"
                            width={30}
                        />
                    </Link>
                </div>
            );
        }
    }
    return (
        <nav className="w-1/6 bg-slate-300 p-2 relative">
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
            {menu_links.length != 0
                ? menu_links
                : "You haven't created any menus."}
            <div className="border-t-2 border-blue-950 bottom-0 absolute p-4 w-11/12">
                <Link href={"/logout/"}>
                    <BiLogOut className="inline" /> Log out
                </Link>
            </div>
        </nav>
    );
};

export default SideBar;
