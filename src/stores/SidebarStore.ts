import { makeAutoObservable } from "mobx";
import { store } from "./store";
import { Section } from "./ContentStore";
import { isProduction } from "../utilities/utils";


type PAGE_STATUS = 'Publish' | 'Private'

export interface NavigationMenu {
    name: string
    section: Section,
    status: PAGE_STATUS,
    enableLanguages: boolean;
}


export interface MenuIcon {
    faIconName: string;
    status: PAGE_STATUS,
    navigationList: NavigationMenu[]
}


const menuList: MenuIcon[] = [
    {
        faIconName: "fa fa-home",
        status: 'Publish',
        navigationList: [
            {
                name: "username",
                section: Section.Summary,
                status: 'Publish',
                enableLanguages: true,
            },
            {
                name: "summary",
                section: Section.Summary,
                status: 'Publish',
                enableLanguages: true,
            },
            {
                name: "working",
                section: Section.Working,
                status: 'Publish',
                enableLanguages: true,
            },
            {
                name: "projects",
                section: Section.Projects,
                status: 'Private',
                enableLanguages: true,
            },
            {
                name: "education",
                section: Section.Education,
                status: 'Publish',
                enableLanguages: true,
            },
            {
                name: "contact",
                section: Section.Contact,
                status: 'Publish',
                enableLanguages: true,
            },
        ]
    },
    {
        faIconName: "fa fa-book",
        status: 'Private',
        navigationList: [
            {
                name: "Region",
                section: Section.Region,
                status: 'Publish',
                enableLanguages: false,
            },
            {
                name: "Region Life",
                section: Section.RegionLife,
                status: 'Publish',
                enableLanguages: false,
            },
            {
                name: "Bible Study",
                section: Section.BibleStudy,
                status: 'Publish',
                enableLanguages: false,
            }
        ]
    },
    {
        faIconName: "fa fa-paint-brush",
        status: 'Private',
        navigationList: [
            {
                name: "Sample UI",
                section: Section.SampleUI,
                status: 'Publish',
                enableLanguages: false,
            },
            {
                name: "Sample UI",
                section: Section.SampleUI,
                status: 'Publish',
                enableLanguages: false,
            }
        ]
    }
]


if (isProduction()) {
    menuList.filter(x => x.status === 'Publish')
}

export default class SidebarStore {


    menuList: MenuIcon[] = this.setDefaultMenuList();
    activeMenuIndex: number = 0;
    navigationList: NavigationMenu[] = this.setNavigationListByIndex(this.activeMenuIndex);
    activeNavigationItemIndex: number = 1;
    showNavigation: boolean = true;
    foldNavigation: boolean = false;
    enableLanguages: boolean = true;


    constructor() {
        makeAutoObservable(this);
    }


    setDefaultMenuList(): MenuIcon[] {
        if (isProduction()) {
            return menuList.filter(x => x.status === 'Publish')
        }
        return menuList;
    }

    setNavigationListByIndex(index: number): NavigationMenu[] {
        if (isProduction()) {
            return menuList[index].navigationList.filter(x => x.status === 'Publish');
        }
        return menuList[index].navigationList;        
    }




    foldNavigationList(): void {
        this.foldNavigation = !this.foldNavigation;
    }

    setActiveMenu(index: number) {
        if (index !== this.activeMenuIndex) {
            this.activeMenuIndex = index;

            // open navigation
            this.showNavigation = true;

            // update navigation
            this.navigationList = this.setNavigationListByIndex(index);
            this.activeNavigationItemIndex = -1;
        }
        else {
            this.showNavigation = !this.showNavigation;
        }
    }

    setActiveSection(index: number) {
        if (this.activeNavigationItemIndex !== index) {
            this.activeNavigationItemIndex = index;
            // update content, section
            this.setContent()

        }
    }

    setContent() {
        const navItem = this.menuList[this.activeMenuIndex].navigationList[this.activeNavigationItemIndex]

        this.enableLanguages = navItem.enableLanguages;

        // update section
        store.contentStore.title = navItem.name;
        store.contentStore.activeSection = navItem.section;
    }
}