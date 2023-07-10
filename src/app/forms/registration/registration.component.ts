import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Applicant } from 'src/app/_Class/applicant';
import { RegistrationServiceService } from 'src/app/_Service/registration-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  applicant: Applicant = new Applicant();

  constructor(private registrationService: RegistrationServiceService, private router: Router){}
  
  onSubmit(){
    this.createApplicantList();
    this.gotoLogin();
    console.log(this.applicant);
  }

  createApplicantList(){
    return this.registrationService.createApplicant(this.applicant).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }

  gotoLogin(){
    this.router.navigate(["/login"]);
  }

  ngOnInit(): void {
   
  }

}
