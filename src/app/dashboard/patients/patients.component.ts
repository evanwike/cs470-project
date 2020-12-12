import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Patient} from '../../_model/patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  @Input() patients$: Observable<Patient[]>;
  columns = ['Patient ID', 'First Name', 'Last Name', 'Injury', 'Medications', 'Tests Taken', 'Therapist ID', 'Treatment Plan']

constructor() { }

  ngOnInit(): void {
  }

}
