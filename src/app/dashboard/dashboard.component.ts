import { Component, OnInit } from '@angular/core';
import {DataService} from '../_service/data.service';
import {Observable} from 'rxjs';
import {Patient} from '../_model/patient';
import {Results} from '../_model/results';
import {Therapist} from '../_model/therapist';
import {Test} from '../_model/test';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  patients$: Observable<Patient[]>;
  results$: Observable<Results[]>;
  therapists$: Observable<Therapist[]>;
  tests$: Observable<Test[]>;

  constructor(private dataService: DataService) {
    this.patients$ = new Observable<Patient[]>();
    this.results$ = new Observable<Results[]>();
    this.therapists$ = new Observable<Therapist[]>();
    this.tests$ = new Observable<Test[]>();
  }

  ngOnInit(): void {
    this.patients$ = this.dataService.patients$;
    this.results$ = this.dataService.results$;
    this.therapists$ = this.dataService.therapists$;
    this.tests$ = this.dataService.getTests();
  }

}
