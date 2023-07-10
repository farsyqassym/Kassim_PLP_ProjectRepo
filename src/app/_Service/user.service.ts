import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  PATH_OF_API = "http://localhost:8084";

  requestHeader = new HttpHeaders(
    {"No_Auth" : "True"}
  );
  constructor(private httpClient: HttpClient,
    private userAuthService: UserAuthService) { }

public login(loginData: any){
  return this.httpClient.post(this.PATH_OF_API + "/authenticate", loginData, { headers: this.requestHeader });
}

// // hizi ni method za kuvuta method kutoka wenye userController
// public forStudent(){
//   return this.httpClient.get(this.PATH_OF_API + '/forStudent', {responseType: "text"});
// }

// public forAdmin(){
//   return this.httpClient.get(this.PATH_OF_API + '/forAdmin', {responseType: "text"});
// }

// public forStaff(){
//   return this.httpClient.get(this.PATH_OF_API + '/forStaff', {responseType: "text"});
// }
// //***************************************************************************


public roleMatch(allowedRoles: any): boolean{
  let isMatch = false;
  const userRoles: any = this.userAuthService.getRoles();

  if(userRoles != null && userRoles){
    for(let i=0; i < userRoles.length; i++){
      for(let j=0; j < allowedRoles.length; j++){
        if(userRoles[i].roleName === allowedRoles[j]){
          isMatch = true;
          return isMatch;
        }
        else{
          return isMatch;
        }
      }
    }
  }
  return true;
}

}



