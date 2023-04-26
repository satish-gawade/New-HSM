import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table' 
import { GetDoctorsComponent } from './Components/Doctors/get-doctors/get-doctors.component';
import { AddDoctorsComponent } from './Components/Doctors/add-doctors/add-doctors.component';

import { GetUsersComponent } from './Components/Users/get-users/get-users.component';
import { AddUsersComponent } from './Components/Users/add-users/add-users.component';

import { AddPatientComponent } from './Components/Patient/add-patient/add-patient.component';
import { GetPatientComponent } from './Components/Patient/get-patient/get-patient.component';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { PatientDashboardComponent } from './Components/Patient/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './Components/Doctors/doctor-dashboard/doctor-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    GetDoctorsComponent,
    AddDoctorsComponent,
    GetUsersComponent,
    AddUsersComponent,
    GetPatientComponent,
    AddPatientComponent,
    AdminDashboardComponent,
    PatientDashboardComponent,
    DoctorDashboardComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
