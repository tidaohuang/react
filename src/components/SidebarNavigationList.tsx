import { observer } from "mobx-react-lite"
import { useStore } from "../stores/store"
import { useMyTranslate } from "../languages/utils/my-translate-tools";





export default observer(function SidebarNavigationList() {

    const { sidebarStore } = useStore();

    const translate = useMyTranslate();

    let intialNavItem;
    if (sidebarStore.navigationList.length > 0) {
        intialNavItem = sidebarStore.navigationList[0];
    }

    return (
        <ul className="navigation-list">
            {sidebarStore.foldNavigation && intialNavItem &&
                <li onClick={() => sidebarStore.foldNavigationList()}
                    className='navigation-item' >
                    <div className="navigation-link">
                        <span className='arrow-down'></span>
                        {translate.translate(intialNavItem.name)}
                    </div>
                </li>
            }
            {!sidebarStore.foldNavigation && sidebarStore.navigationList.map((item, index) => (
                <li key={index} onClick={() => {
                        if (index === 0) {
                            sidebarStore.foldNavigationList()
                        } else {
                            sidebarStore.setActiveSection(index)
                        }
                    }}
                    className={`navigation-item ${index === sidebarStore.activeNavigationItemIndex ? 'navigation-active' : ''}`} >
                    <div className="navigation-link">
                        <span className={index === 0 ? 'arrow-down' : 'arrow-right'}></span>
                        {translate.translate(item.name)}
                    </div>
                </li>
            ))}
        </ul>

    )
})