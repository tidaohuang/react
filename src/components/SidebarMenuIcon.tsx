import { observer } from "mobx-react-lite"
import { useStore } from "../stores/store"


interface Props {
    index: number
    faIconName: string
    active: boolean
}


export default observer(function SidebarMenuIcon(props: Props) {

    const { sidebarStore } = useStore();

    return (
        <li className={`menu-icons-item ${props.active ? 'menu-active' : ''}`}
            onClick={() => sidebarStore.setActiveMenu(props.index)}
        >
            <label className="menu-link">
                <i className={props.faIconName}></i>
            </label>
        </li >
    )
})