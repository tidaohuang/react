import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store";
import { useTranslation } from "react-i18next";



export default observer(function SidebarLanguage() {

    const { translateStore } = useStore();
    const { i18n } = useTranslation();

    return (
        <div className="language">
            <input type="checkbox" id="language" hidden onChange={(e) => {
                translateStore.setChinese(e.target.checked)
                i18n.changeLanguage(translateStore.languageCode);
            }} />
            <label className="switch" htmlFor="language">
                <span className="slider round"></span>
                <div className="right">EN</div>
                <div className="left">CN</div>
            </label>
        </div>
    )
})