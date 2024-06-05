export type COLORS = 'bg-blue' | 'bg-light-blue' | 'bg-yellow' | 'bg-pink' | 'bg-green';
export type Tag = { name: string, color: COLORS };



export type COLORS2 = 'primary' | 'secondary' | 'blue' | 'lightblue' | 'green' | 'orange' | 'pink' | 'yellow';
export type Tag2 = { name: string, color: COLORS2 };

export interface EducationViewModel {
    commonHeader: string;
    schools: { name: string, degree: string, date: string }[]
    anotherHeader: string,
    tags: Tag[]
    courses: { name: string, url: string, tags: string[] }[]
}
