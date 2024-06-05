import { observer } from "mobx-react-lite"
import { useStore } from "../stores/store"
import { useMyTranslate } from "../languages/utils/my-translate-tools";



export default observer(function ContentTitle() {

    const { contentStore } = useStore();
    const translate = useMyTranslate();

    return (
        <div className="content-title">
            <div className="content-title-orange">
                TS <span>{translate.translate(contentStore.title)}.ts</span>
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
    )
})