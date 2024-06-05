import { makeAutoObservable } from "mobx";
import { en } from "../languages/en";

export enum Section {
    Summary = 'SectionSummary',
    Education = 'SectionEducation',
    Working = 'SectionWorking',
    Projects = 'SectionProjects',
    Contact = "SectionContact",

    // Bible
    Region = "SectionRegion",
    RegionLife = "SectionRegionLife",
    BibleStudy = "SectionBibleStudy",

    // Sample UI
    SampleUI = "SectionSampleUI",
}



export default class ContentStore {




    title: string = 'summary';
    activeSection: Section = Section.Summary;
    activeUdemyTags: string[] = en.SectionEducation.tags.map(x => x.name);
    allUdemyTags: string[] = en.SectionEducation.tags.map(x => x.name);

    constructor() {
        makeAutoObservable(this);
    }

    checkTagSelected(tags: string[]): boolean {


        let allFound = true;
        for (let i = 0; i < tags.length; i++) {

            const found = this.activeUdemyTags.find(x => x === tags[i]);
            if (!found) {
                allFound = false;
            }
        }

        if (allFound) {
            return true;
        }

        return false;

    }


    updateUdemyTag(name: string) {

        if (name === 'All') {
            if (this.activeUdemyTags.find(x => x === name)) {
                this.activeUdemyTags = [];
            } else {
                this.activeUdemyTags = this.allUdemyTags;
            }
        } else {
            if (this.activeUdemyTags.find(x => x === name)) {
                this.activeUdemyTags = this.activeUdemyTags.filter(x => x !== name);

                // remove all tag
                this.activeUdemyTags = this.activeUdemyTags.filter(x => x !== 'All');
            } else {
                this.activeUdemyTags.push(name);

                // check all checked
                if (this.activeUdemyTags.length === this.allUdemyTags.length - 1) {
                    this.activeUdemyTags.push('All')
                }
            }
        }
    }

    async sendEmail(email: string, name: string, message: string): Promise<boolean> {
        return Promise.resolve(false);
    }

}