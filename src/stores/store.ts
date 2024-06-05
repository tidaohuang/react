import { createContext, useContext } from "react";
import SidebarStore from "./SidebarStore";
import ContentStore from "./ContentStore";
import TranslateStore from "./TranslateStore";

interface Store {
    sidebarStore: SidebarStore,
    contentStore: ContentStore,
    translateStore: TranslateStore,
}


export const store: Store = {
    sidebarStore: new SidebarStore(),
    contentStore: new ContentStore(),
    translateStore: new TranslateStore(),
}

export const StoreContext = createContext(store);

// react hook
export function useStore() {
    return useContext(StoreContext);
}

