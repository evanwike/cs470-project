import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Test} from '../../_model/test';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  @Input() tests$: Observable<Test[]>;
  columns = ['Test ID', 'Test Name', 'Test Template'];

  constructor() { }

  ngOnInit(): void {
  }

}
