import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Patient} from '../_model/patient';
import {Results} from '../_model/results';
import {Therapist} from '../_model/therapist';
import {Test} from '../_model/test';
import {PatientTest} from '../_model/patient-test';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL = 'http://localhost:3000';

  readonly patients$: Observable<Patient[]>;
  readonly results$: Observable<Results[]>;
  readonly therapists$: Observable<Therapist[]>;
  readonly tests$: Observable<Test[]>;


  constructor(private http: HttpClient) {
    this.patients$ = this.getPatients();
    this.results$ = this.getResults();
    this.therapists$ = this.getTherapists();
    this.tests$ = this.getTests();
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiURL + '/patients')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getTherapists(): Observable<Therapist[]> {
    return this.http.get<Therapist[]>(this.apiURL + '/therapists')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getResults(): Observable<Results[]> {
    return this.http.get<Results[]>(this.apiURL + '/results')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getTests(): Observable<Test[]> {
    return this.http.get<Test[]>(this.apiURL + '/tests')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getPatientTests(id: number) {
    return this.http.get<PatientTest[]>(this.apiURL + `/patient/tests/${id}`)
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
