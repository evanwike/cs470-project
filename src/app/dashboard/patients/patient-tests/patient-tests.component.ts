import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {PatientTest} from '../../../_model/patient-test';
import {DataService} from '../../../_service/data.service';

@Component({
  selector: 'app-patient-tests',
  templateUrl: './patient-tests.component.html',
  styleUrls: ['./patient-tests.component.scss']
})
export class PatientTestsComponent implements OnInit {
  id: number;
  tests$: Observable<PatientTest[]>;
  columns = ['First Name', 'Last Name', 'Results']

  constructor(private dataService: DataService) {
    this.id = 0;
    this.tests$ = new Observable<PatientTest[]>();
  }

  ngOnInit(): void {
  }

  getTests() {
    this.tests$ = this.dataService.getPatientTests(this.id);
    this.tests$.subscribe(data => console.log(data))
    console.log(this.id)
  }

}
