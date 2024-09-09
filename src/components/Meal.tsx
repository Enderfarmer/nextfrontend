import { MenuEntry, MenuEntries } from "@/types";

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

export default Meal;
