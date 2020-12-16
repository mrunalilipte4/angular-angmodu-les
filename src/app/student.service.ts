import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "./student/student.model";
import { StudentModule } from "./student/student.module";

@Injectable()
export class StudentService {
  students: Student[] = [
    {
      name: "Mrunali Lipte",
      prn: "17UIT11027XX",
      college: " DKTE SOCIETY TEXTILE AND ENGINEERING INSTITUTE, ICHALKARANJI",
      phoneno: 7387538264
    },
    {
      name: "Vidhya Lohar",
      prn: "17UIT11028XX",
      college: " DKTE SOCIETY TEXTILE AND ENGINEERING INSTITUTE, ICHALKARANJI",
      phoneno: 8698632208
    },
    {
      name: "Mayuri Koli",
      prn: "17UIT11029XX",
      college: " DKTE SOCIETY TEXTILE AND ENGINEERING INSTITUTE, ICHALKARANJI",
      phoneno: 8698180040
    }
  ];
  constructor() {}

  public getStudents(): any {
    const studentsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.students);
      }, 1000);
    });
    return studentsObservable;
  }
}
