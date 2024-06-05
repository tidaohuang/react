import { observer } from "mobx-react-lite"
import { WorkingViewModel } from "../models/WorkingViewModel"




interface Props {
    viewModel: WorkingViewModel
}

export default observer(function SectionWorking({ viewModel }: Props) {
    return (
        <section className="section working">
            <div className="common-header">
                {viewModel.commonHeader}
            </div>

            <ul className="timeline-list">
                {viewModel.items.map((work, index) => (
                    <li className="timeline-item" key={index}>
                        <div className="timeline-content">
                            <div className="timeline-header">{work.title}</div>
                            <div className="timeline-subheader">{work.company}</div>
                            <div className="timeline-date">{work.date}</div>
                            <ul className="timeline-result-list">
                                {work.jobs.map((job, jobId) => (
                                    <li className="timeline-result-item" key={jobId}>
                                        {job}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>

        </section>
    )
})