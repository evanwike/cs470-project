import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Patient} from '../_model/patient';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL = 'http://localhost:3000';

  readonly patients$: Observable<Patient[]>;


  constructor(private http: HttpClient) {
    this.patients$ = this.getPatients();
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiURL + '/patients')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getTherapists() {
    return this.http.get(this.apiURL + '/therapists')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getResults() {
    return this.http.get(this.apiURL + '/results')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getTests() {
    return this.http.get(this.apiURL + '/tests')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getPatientHistory(id: number) {
    return this.http.get(this.apiURL + `/patient/history/${id}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }




  handleError(error: Observable<Object> | any) {
    let errorMsg = '';

    if (error.error instanceof ErrorEvent) {
      errorMsg = error.error.message;
    }
    else {
      errorMsg = `Error code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(errorMsg);
  }
}
