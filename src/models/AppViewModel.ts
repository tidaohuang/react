
import { ProjectsViewModel } from "./ProjectsViewModel";
import { SummaryViewModel } from "./SummaryViewModel";
import { WorkingViewModel } from "./WorkingViewModel";
import { EducationViewModel } from "./EducationViewModel";
import { ContactViewModel } from "./ContactViewModel";


export interface AppViewModel {
    username: string;
    summary: string;
    working: string;
    projects: string;
    education: string;
    contact: string;
    SectionSummary: SummaryViewModel,
    SectionWorking: WorkingViewModel,
    SectionProjects: ProjectsViewModel
    SectionEducation: EducationViewModel,
    SectionContact: ContactViewModel;
}