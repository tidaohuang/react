import { observer } from "mobx-react-lite"
import { EducationViewModel } from "../models/EducationViewModel"
import { useStore } from "../stores/store"



interface Props {
    viewModel: EducationViewModel
}


export default observer(function SectionEducation({ viewModel }: Props) {

    const { contentStore } = useStore();

    return (
        <section className="section education">
            <div className="common-header">
                {viewModel.commonHeader}
            </div>

            <ul className="timeline-list">
                {viewModel.schools.map((school, index) => (
                    <li className="timeline-item" key={index}>
                        <div className="timeline-content">
                            <div className="timeline-header">{school.name}</div>
                            <div className="timeline-subheader">{school.degree}</div>
                            <div className="timeline-date">{school.date}</div>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="common-header">
                {viewModel.anotherHeader}
            </div>


            <div className="education-tags-wrapper">
                {viewModel.tags.map((tag, index) => (
                    <div key={index}
                        className={`education-tag ${tag.color} ${contentStore.activeUdemyTags.find(x => x === tag.name) ? 'active' : 'inactive'}`}
                        onClick={() => { contentStore.updateUdemyTag(tag.name) }}>
                        <span className="education-tag-name">{tag.name}</span>
                    </div>
                ))}
            </div>

            <div className="education-udemy-wrapper">

                {viewModel.courses.map((course, index) => (
                    (contentStore.checkTagSelected(course.tags) &&
                        <div className="education-udemy" key={index}>
                            <a className="education-udemy-name" href={course.url} target="_blank" rel="noopener noreferrer">{course.name}</a>
                            <div className="education-udemy-tags-wrapper">
                                {course.tags.map((tag, index) => (
                                    <div key={index} className={`education-udemy-tag ${viewModel.tags.find(x => x.name === tag)?.color}`}>{tag}</div>
                                ))}
                            </div>
                        </div>
                    )
                ))}
            </div>

        </section>
    )
})