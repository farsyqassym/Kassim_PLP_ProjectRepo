import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posting } from 'src/app/_Class/posting';
import { UserAuthService } from 'src/app/_Service/user-auth.service';
import { UserService } from 'src/app/_Service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  postings!: Posting[];

  constructor(private userAuthService: UserAuthService, 
    private router: Router,
    public userService: UserService){}

  ngOnInit(): void {
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }
//------ ---HAIKUBALI kunavigate
  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/home']);
  }



  

}
