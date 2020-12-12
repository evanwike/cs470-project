import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Results} from '../../_model/results';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() results$: Observable<Results[]>;
  columns = ['Result ID', 'Patient ID', 'Test ID', 'Therapist ID', 'Results'];
  constructor() { }

  ngOnInit(): void {
  }

}
