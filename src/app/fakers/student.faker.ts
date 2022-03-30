import faker from "@faker-js/faker";
import { Student } from "../models/student.model";

export class StudentFaker {
    public static fetchStudents(size=20) {
        let students: Student[] = [];
        for (let i=0; i < size; i++) {
            let student: Student = new Student({
                name: faker.name.firstName(),
                class: faker.datatype.number({min: 1, max: 10}),
                section: faker.random.arrayElement(['A', 'B', 'C', 'D', 'E', 'F']),
                sub1: faker.datatype.number({min: 1, max: 100}),
                sub2: faker.datatype.number({min: 1, max: 100}),
                sub3: faker.datatype.number({min: 1, max: 100})
            });
            students.push(student);
        }
        return students;
    }
}
