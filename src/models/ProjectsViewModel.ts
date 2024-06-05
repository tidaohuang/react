import { Tag2 } from "./EducationViewModel";

export interface Project {
    img: string,
    logo?: string,
    name: string,
    date: string,
    description: string,
    links: { url: string, text: string }[],
    tags: Tag2[]
}

export interface ProjectsViewModel {
    commonHeader: string;
    projects: Project[]
}
