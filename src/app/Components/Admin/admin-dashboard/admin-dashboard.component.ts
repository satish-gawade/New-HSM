import { Component } from '@angular/core';
import { faHeartbeat, faCog} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  faHeartbeat = faHeartbeat;
  faCog = faCog;
  constructor(private router:Router)
  {

  }

  docflag:boolean=false;
  docToggle(){
    this.docflag=true;
  }

  patflag:boolean=false;
  patToggle(){
    this.patflag=true;
  }

  resetFlag(){
    this.docflag=false;
  }

}
