import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Models/patient';
import { PatientApiService } from 'src/app/Service/Patient/patient-api.service';

@Component({
  selector: 'app-get-patient',
  templateUrl: './get-patient.component.html',
  styleUrls: ['./get-patient.component.css']
})
export class GetPatientComponent {
  constructor(public ps:PatientApiService, private router:Router) 
  {
    // this.data.getDoctorData().subscribe(data => {console.log(data);this.doctorsList=data});
  }

  ngOnInit(){
    this.getPatient()
  }

  getPatient(){
    this.ps.getPatient().subscribe(data => {this.ps.patientsList=data});
  }
  
  addPatient(){
    this.router.navigate(['/add-patient']);
  }

  deletePatient(docId:number){
    this.ps.deletePatient(docId).subscribe(()=>{this.getPatient();});
  }
}
