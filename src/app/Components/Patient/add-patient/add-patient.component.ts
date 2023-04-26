import { Component } from '@angular/core';
import { NgModule } from '@angular/core';;
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { PatientApiService } from 'src/app/Service/Patient/patient-api.service';
import { Patient } from 'src/app/Models/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})

export class AddPatientComponent {
  constructor(public ps:PatientApiService, private router:Router){}
  ngOnInit(){}

  submit(form:NgForm)
  {
    if(this.ps.patientData.id==0){
      this.insert(form);
    }
    // else{
    //   this.update(form);
    // }
  }

  insert(myForm:NgForm)
  {
    console.log('submitted');
    this.ps.postPatient();
    this.resetForm(myForm);
    this.refreshData();
    this.router.navigate(['/get-patient']);
  }

  resetForm(myForm:NgForm){
    myForm.form.reset();
    this.ps.patientData=new Patient();
  }

  refreshData(){
    this.ps.getPatient().subscribe(res=>{
      this.ps.patientsList=res;
    });
  }
}
