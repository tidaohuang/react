import { observer } from "mobx-react-lite"
import { useStore } from "../stores/store"
import SidebarMenuIcon from "./SidebarMenuIcon";


export default observer(function SidebarMenuIconList() {


    const { sidebarStore } = useStore();

    return (
        <ul className="menu-icons-list">
            {sidebarStore.menuList.map((menu, index) => (
                <SidebarMenuIcon
                    key={index}
                    index={index}
                    faIconName={menu.faIconName}
                    active={sidebarStore.activeMenuIndex === index ? true : false} />
            ))}
        </ul>
    )
})

