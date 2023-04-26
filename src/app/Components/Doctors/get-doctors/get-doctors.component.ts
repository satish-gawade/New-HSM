import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/Models/doctor';
import { DoctorApiService } from 'src/app/Service/Doctor/doctor-api.service';

@Component({
  selector: 'app-get-doctors',
  templateUrl: './get-doctors.component.html',
  styleUrls: ['./get-doctors.component.css']
})

export class GetDoctorsComponent {
  constructor(public ds:DoctorApiService, private router:Router) 
  {
    // this.data.getDoctorData().subscribe(data => {console.log(data);this.doctorsList=data});
  }

  ngOnInit(){
    this.getDoctor()
  }

  getDoctor(){
    this.ds.getDoctor().subscribe(data => {this.ds.doctorsList=data});
  }
  
  addDoctor(){
    this.router.navigate(['/add-doctor']);
  }

  deleteDoctor(docId:number){
    this.ds.deleteDoctor(docId).subscribe(()=>{this.getDoctor();});
  }
}
