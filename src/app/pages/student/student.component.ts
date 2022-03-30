import { Component, OnInit } from '@angular/core';
import { StudentFaker } from 'src/app/fakers/student.faker';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student',
  template: `
  <div class="row">
    <div class="col-12">
        <table class="table table-responsive table-striped">
            <thead>
                <tr>
                    <th *ngFor="let column of columns; let i=index;" (click)="i == 0 ? sortMode = sortMode == 2 ? 0 : sortMode+1 : null">
                        {{column | titlecase}} <span *ngIf="i == 0 && sortMode !== 0">
                            <i class="pt-2" [ngClass]="sortMode == 1 ? 'fa fa-soild fa-sort-up' : 'fa fa-soild fa-sort-down'"></i></span>
                    </th>
                </tr>
                <tr *ngFor="let student of studentData">
                    <td *ngFor="let column of columns">{{ student[column] }}</td>
                </tr>
            </thead>
        </table>
    </div>
  </div>`
})
export class StudentComponent implements OnInit {

  students: Student[] = StudentFaker.fetchStudents();
  sortMode = 0;

  get columns() { return Object.keys(this.students[0]); }

  get studentData() {
    if (this.sortMode == 0) return this.students;
    else if (this.sortMode == 1) return this.students.slice().sort((s1, s2) => s1.name.localeCompare(s2.name));
    else return this.students.slice().sort((s1, s2) => s2.name.localeCompare(s1.name));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
