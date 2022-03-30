export class Student {
    constructor(init?: Partial<Student>) { init ? Object.assign(this, init) : null; }

    name!: string;
    section!: string;
    class!: number;
    sub1!: number;
    sub2!: number;
    sub3!: number;
}
