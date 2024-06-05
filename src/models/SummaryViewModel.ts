
export interface SummaryViewModel {
    commonHeader: string;
    items: { text: string, meta: string }[];
    summaryHeader: string;
    descriptions: string[];
    certificationHeader: string;
    certItems: { name: string, meta: string[], img: string }[]
}
