import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/_Service/user-auth.service';
import { UserService } from 'src/app/_Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private userService: UserService,
    private userAuthService:UserAuthService,
    private router: Router ){}

  
  ngOnInit(): void {
  }

  login(loginForm: NgForm){
    this.userService.login(loginForm.value).subscribe(
      (Response:any)=>{
        this.userAuthService.setRoles(Response.user.role);
        this.userAuthService.setToken(Response.jwtToken);

        const role = Response.user.role[0].roleName;
        if(role === "Admin"){
          this.router.navigate(['/main/admin']);
        }
        else if(role === "Staff"){
          this.router.navigate(['/main/staff']);
        }
        else{
          this.router.navigate(['/main/applicant']);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
