import { observer } from "mobx-react-lite"
import { SummaryViewModel } from "../models/SummaryViewModel"
import { BASE } from "../constants/constant"




interface Props {
    viewModel: SummaryViewModel
}

export default observer(function SectionSummary({ viewModel }: Props) {
    return (
        <>
            <section className="section home">
                <div className="common-header">
                    {viewModel.commonHeader}
                </div>

                <ul className="content-items">
                    {viewModel.items.map((item, index) => (
                        <li className="content-item" key={index}>
                            {item.text}
                            <div className="content-item-meta">
                                {item.meta}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="section summary">
                <div className="common-header">
                    {viewModel.summaryHeader}
                </div>

                <ul className="summary-list">
                    {viewModel.descriptions.map((item, index) => (
                        <li className="summary-item" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="section certification">

                <div className="common-header">
                    {viewModel.certificationHeader}
                </div>
                <div className="badges-card-wrapper">
                    {viewModel.certItems.map((item, index) => (
                        <div className="badge-card" key={index}>
                            <div className="badge-image-wrapper">
                                <img src={`${BASE}${item.img}`} alt="" className="badge-image" />
                            </div>
                            <div className="badge-info">
                                {item.name}
                                {item.meta.map((meta, index) => (
                                    <div className="badge-meta" key={index}>{meta}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </>

    )
})