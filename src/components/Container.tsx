import { observer } from "mobx-react-lite";
import Content from "./Content";





export default observer(function Container() {

    return (
        <section className="container">
            <Content />

        </section>
    )
})