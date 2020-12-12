import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { PatientsComponent } from './dashboard/patients/patients.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TherapistsComponent } from './dashboard/therapists/therapists.component';
import { ResultsComponent } from './dashboard/results/results.component';
import { TestsComponent } from './dashboard/tests/tests.component';
import { MatCardModule } from '@angular/material/card';
import { PatientTestsComponent } from './dashboard/patients/patient-tests/patient-tests.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientsComponent,
    TherapistsComponent,
    ResultsComponent,
    TestsComponent,
    PatientTestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
