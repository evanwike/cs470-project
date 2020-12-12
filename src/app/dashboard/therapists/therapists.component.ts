import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Therapist} from '../../_model/therapist';

@Component({
  selector: 'app-therapists',
  templateUrl: './therapists.component.html',
  styleUrls: ['./therapists.component.scss']
})
export class TherapistsComponent implements OnInit {
  @Input() therapists$: Observable<Therapist[]>;
  columns = ['Therapist ID', 'First Name', 'Last Name'];
  constructor() { }

  ngOnInit(): void {
  }

}
