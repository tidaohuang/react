import { observer } from "mobx-react-lite"
import SidebarMenuIconList from "./SidebarMenuIconList"
import { useStore } from "../stores/store"
import SidebarLanguage from "./SidebarLanguage";
import SidebarNavigationList from "./SidebarNavigationList";



export default observer(function Sidebar() {
    const { sidebarStore } = useStore();

    return (
        <>
            {/* this checkbox used to display nav navigation by css */}
            <input type="checkbox" className="checkbox" id="sidebar"
                checked={sidebarStore.showNavigation} hidden
                onChange={() => {/* add onChange to avoid DOM error */ }} />
            <div className="navbar">

                <div className="sidebar">
                    <SidebarMenuIconList />
                    {sidebarStore.enableLanguages &&
                        <SidebarLanguage />
                    }
                </div>

                <nav className="navigation">
                    <SidebarNavigationList />
                </nav>
            </div>
        </>
    )
})