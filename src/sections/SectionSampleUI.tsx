

export default function SectionSampleUI() {
    return (
        <>

            <section className="section sample-ui">
                <div className="btn-groups">
                    <button className="btn">btn</button>
                    <button className="btn btn-primary">primary</button>
                    <button className="btn btn-secondary">secondary</button>
                    <button className="btn btn-blue">btn-blue</button>
                    <button className="btn btn-lightblue">btn-lightblue</button>
                    <button className="btn btn-green">btn-green</button>
                    <button className="btn btn-orange">btn-orange</button>
                    <button className="btn btn-pink">btn-pink</button>
                    <button className="btn btn-yellow">btn-yellow</button>
                </div>

                <div className="btn-groups">
                    <button className="btn">btn</button>
                    <button className="btn btn-outline-primary">outline-primary</button>
                    <button className="btn btn-outline-secondary">outline-secondary</button>
                    <button className="btn btn-outline-blue">outline-btn-blue</button>
                    <button className="btn btn-outline-lightblue">outline-btn-lightblue</button>
                    <button className="btn btn-outline-green">outline-btn-green</button>
                    <button className="btn btn-outline-orange">outline-btn-orange</button>
                    <button className="btn btn-outline-pink">outline-btn-pink</button>
                    <button className="btn btn-outline-yellow">outline-btn-yellow</button>
                </div>


                <div className="btn-groups">
                    <button className="btn loading" disabled>btn</button>
                    <button className="btn loading btn-primary">primary</button>
                    <button className="btn loading btn-secondary">secondary</button>
                    <button className="btn loading btn-blue">btn-blue</button>
                    <button className="btn loading btn-lightblue">btn-lightblue</button>
                    <button className="btn loading btn-green">btn-green</button>
                    <button className="btn loading btn-orange">btn-orange</button>
                    <button className="btn loading btn-pink">btn-pink</button>
                    <button className="btn loading btn-yellow">btn-yellow</button>
                </div>
            </section>
            <section className="section sample-ui" style={{paddingBottom: '10rem'}}>
                <div className="label-groups">
                    <div className="label">label</div>
                    <div className="label label-primary">label primary</div>
                    <div className="label label-secondary">label secondary</div>
                    <div className="label label-blue">label blue</div>
                    <div className="label label-lightblue">label lightblue</div>
                    <div className="label label-green">label green</div>
                    <div className="label label-orange">label orange</div>
                    <div className="label label-pink">label pink</div>
                    <div className="label label-yellow">label yellow</div>
                </div>
            </section>
        </>
    )
}