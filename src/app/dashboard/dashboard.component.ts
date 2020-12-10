import { Component, OnInit } from '@angular/core';
import {DataService} from '../_service/data.service';
import {Observable} from 'rxjs';
import {Patient} from '../_model/patient';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  patients$: Observable<Patient[]>;

  constructor(private dataService: DataService) {
    this.patients$ = new Observable<Patient[]>();
  }

  ngOnInit(): void {
    this.patients$ = this.dataService.patients$;
  }

}
