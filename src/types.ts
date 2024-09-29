export interface MenuEntry {
    breakfast: string;
    lunch: string;
    dessert: string;
    dinner: string;
}

export interface MenuEntries {
    monday: MenuEntry;
    tuesday: MenuEntry;
    wednesday: MenuEntry;
    thursday: MenuEntry;
    friday: MenuEntry;
    saturday: MenuEntry;
    sunday: MenuEntry;
}

export interface Menu {
    id: number;
    name: string;
    entries: MenuEntries;
}
