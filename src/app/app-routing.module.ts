import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './Components/Doctors/doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './Components/Patient/patient-dashboard/patient-dashboard.component';
import { GetDoctorsComponent } from './Components/Doctors/get-doctors/get-doctors.component';
import { AddDoctorsComponent } from './Components/Doctors/add-doctors/add-doctors.component';
import { GetPatientComponent } from './Components/Patient/get-patient/get-patient.component';
import { AddPatientComponent } from './Components/Patient/add-patient/add-patient.component';
import { GetUsersComponent } from './Components/Users/get-users/get-users.component';
import { AddUsersComponent } from './Components/Users/add-users/add-users.component';

const routes: Routes = [
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'doctor', component: DoctorDashboardComponent },
  { path: 'patient', component: PatientDashboardComponent },
  { path: 'get-doctor', component: GetDoctorsComponent },
  { path: 'add-doctor', component: AddDoctorsComponent },
  { path: 'get-patient', component: GetPatientComponent },
  { path: 'add-patient', component: AddPatientComponent },
  { path: 'get-user', component: GetUsersComponent },
  { path: 'add-user', component: AddUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
