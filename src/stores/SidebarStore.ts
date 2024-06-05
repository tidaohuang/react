import { makeAutoObservable } from "mobx";
import { store } from "./store";
import { Section } from "./ContentStore";


export interface NavigationMenu {
    name: string
    section: Section,
    enableLanguages: boolean;
}


export interface MenuIcon {
    faIconName: string;
    navigationList: NavigationMenu[]
}


const menuList: MenuIcon[] = [
    {
        faIconName: "fa fa-home",
        navigationList: [
            {
                name: "username",
                section: Section.Summary,
                enableLanguages: true,
            },
            {
                name: "summary",
                section: Section.Summary,
                enableLanguages: true,
            },
            {
                name: "working",
                section: Section.Working,
                enableLanguages: true,
            },
            {
                name: "projects",
                section: Section.Projects,
                enableLanguages: true,
            },
            {
                name: "education",
                section: Section.Education,
                enableLanguages: true,
            },
            {
                name: "contact",
                section: Section.Contact,
                enableLanguages: true,
            },
        ]
    },
    {
        faIconName: "fa fa-book",
        navigationList: [
            {
                name: "Region",
                section: Section.Region,
                enableLanguages: false,
            },
            {
                name: "Region Life",
                section: Section.RegionLife,
                enableLanguages: false,
            },
            {
                name: "Bible Study",
                section: Section.BibleStudy,
                enableLanguages: false,
            }
        ]
    },
    {
        faIconName: "fa fa-paint-brush",
        navigationList: [
            {
                name: "Sample UI",
                section: Section.SampleUI,
                enableLanguages: false,
            },
            {
                name: "Sample UI",
                section: Section.SampleUI,
                enableLanguages: false,
            }
        ]
    }
]


export default class SidebarStore {
    

    menuList: MenuIcon[] = menuList;
    activeMenuIndex: number = 0;
    navigationList: NavigationMenu[] = menuList[0].navigationList;
    activeNavigationItemIndex: number = 1;
    showNavigation: boolean = true;
    foldNavigation: boolean = false;
    enableLanguages: boolean = true;


    constructor() {
        makeAutoObservable(this);
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
            this.navigationList = this.menuList[index].navigationList;
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