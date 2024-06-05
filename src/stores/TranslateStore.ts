import { makeAutoObservable } from "mobx";


enum Languages {
    EN = 'en',
    CN = 'zh-TW'
}


export default class TranslateStore {
    languageCode: Languages = Languages.EN;

    constructor() {
        makeAutoObservable(this);
    }

    setChinese(checked: boolean) {
        if (checked) {
            this.languageCode = Languages.CN;
        } else {
            this.languageCode = Languages.EN;
        }
    }
}    