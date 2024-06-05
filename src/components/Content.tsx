import { observer } from "mobx-react-lite";
import ContentTitle from "./ContentTitle";
import SectionEducation from "../sections/SectionEducation";
import SectionProjects from "../sections/SectionProjects";
import SectionSummary from "../sections/SectionSummary";
import SectionWorking from "../sections/SectionWorking";
import { useStore } from "../stores/store";
import { Section } from "../stores/ContentStore";
import { useMyTranslate } from "../languages/utils/my-translate-tools";
import { SummaryViewModel } from "../models/SummaryViewModel";
import { WorkingViewModel } from "../models/WorkingViewModel";
import { ProjectsViewModel } from "../models/ProjectsViewModel";
import { EducationViewModel } from "../models/EducationViewModel";
import SectionContact from "../sections/SectionContact";
import SectionBasicUi from "../sections/SectionSampleUI";
import { ContactViewModel } from "../models/ContactViewModel";
import SectionRegionLife from "../sections/SectionRegionLife";




export default observer(function Content() {

    const { contentStore: { activeSection } } = useStore();
    const translate = useMyTranslate();
    let content = [];

    if (activeSection === Section.Summary) {
        const viewModel = translate.translateObject<SummaryViewModel>(activeSection);
        content.push(<SectionSummary viewModel={viewModel} key={activeSection} />)
    }
    if (activeSection === Section.Working) {
        const viewModel = translate.translateObject<WorkingViewModel>(activeSection);
        content.push(<SectionWorking viewModel={viewModel} key={activeSection} />)
    }
    if (activeSection === Section.Projects) {
        const viewModel = translate.translateObject<ProjectsViewModel>(activeSection);
        content.push(<SectionProjects viewModel={viewModel} key={activeSection} />)
    }
    if (activeSection === Section.Education) {
        const viewModel = translate.translateObject<EducationViewModel>(activeSection);
        content.push(<SectionEducation viewModel={viewModel} key={activeSection} />)
    }
    if (activeSection === Section.Contact) {
        const viewModel = translate.translateObject<ContactViewModel>(activeSection);
        content.push(<SectionContact viewModel={viewModel} key={activeSection} />)
    }

    if (activeSection === Section.RegionLife) {
        content.push(<SectionRegionLife key={activeSection} />)
    }

    if (activeSection === Section.SampleUI) {
        content.push(<SectionBasicUi key={activeSection} />)
    }

    return (
        <>
            <ContentTitle />
            {content}
        </>
    )
})