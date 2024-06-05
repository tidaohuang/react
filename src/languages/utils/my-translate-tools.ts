import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

class MyTranslateTool {

    t: TFunction<"translation", undefined>;

    constructor(translate: TFunction<"translation", undefined>) {
        this.t = translate;
    }

    translate(value: string) {
        return this.t(value);
    }

    translateObject<T>(value: string) {
        const object = this.t(value, { returnObjects: true });
        return object as unknown as T;
    }
}


export function useMyTranslate() {
    const { t } = useTranslation()
    return new MyTranslateTool(t);
}