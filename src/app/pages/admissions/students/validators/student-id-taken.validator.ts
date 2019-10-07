import { FormControl } from '@angular/forms';
import { StudentIdNumberService } from '../../services/student-id-number/student-id-number.service';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class IdNumberValidator {
    constructor(private studentId: StudentIdNumberService) { }

    studentIdTaken(control: FormControl): any {

        return new Promise((resolve, reject) => {
            this.studentId.get(control.value).subscribe(
                data => {
                    if (data.id) {
                        resolve({
                            id_taken: true
                        });
                    } else {
                        resolve(null);
                    }

                },
                error => {
                    reject();
                }
            );
        });
    }

}
