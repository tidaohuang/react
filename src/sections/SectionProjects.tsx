import { observer } from "mobx-react-lite"
import { ProjectsViewModel } from "../models/ProjectsViewModel"



interface Props {
    viewModel: ProjectsViewModel
}


export default observer(function SectionProjects({ viewModel }: Props) {
    return (
        <section className="section projects">

            <div className="common-header">
                {viewModel.commonHeader}
            </div>

            <div className="projects-cards-wrapper">
                {viewModel.projects.map((project, index) => (
                    <div className="project-card" key={index}>

                        <div className="project-img">
                            <img src={`/${project.img}`} alt="" />
                        </div>

                        {project.logo &&
                            <div className="project-logo">
                                <img src={`/${project.logo}`} alt="" />
                            </div>
                        }
                        
                        <div className="project-card-content">
                            <div className="project-card-name">
                                {project.name}
                                <span className="project-card-year">{project.date}</span>
                            </div>
                            <div className="project-card-paragraph">{project.description}</div>
                            <div className="project-card-meta">
                                {project.links.map((link, linkIndex) => (
                                    <a className="project-card-link" key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                                ))}
                                {project.tags.map((tag, tagIndex) => (
                                    <div className={`label label-${tag.color}`} key={tagIndex}>{tag.name}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
})