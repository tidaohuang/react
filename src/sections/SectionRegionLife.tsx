import { observer } from "mobx-react-lite";



export default observer(function SectionRegionLife() {
    return (
        <section className="section">
            <ul className="timeline-list">
                <li className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-header">header</div>
                        <div className="timeline-subheader">subheader</div>
                        <div className="timeline-date">date</div>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-header">header</div>
                        <div className="timeline-subheader">subheader</div>
                        <div className="timeline-date">date</div>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-header">header</div>
                        <div className="timeline-subheader">subheader</div>
                        <div className="timeline-date">date</div>
                    </div>
                </li>
            </ul>
        </section>
    )
})