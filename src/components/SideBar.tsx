import { Menu } from "@/types";

const SideBar = async ({ menus }: { menus: Array<Menu> }) => {
    let menu_links = [];
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

    return <nav className="w-1/6 bg-slate-300">{menu_links}</nav>;
};

export default SideBar;
