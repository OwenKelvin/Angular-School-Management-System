import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }
  getAllActiveSubjects() {
    return [
      { name: 'PP1', subjects: [{ id: 1, name: 'English' }, { id: 1, name: 'Learning To Count' }] },
      { name: 'PP2', subjects: [{ id: 1, name: 'English' }, { id: 1, name: 'Math' }] }
    ];
  }
}
