import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Applicant } from '../_Class/applicant';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  regPath = "http://localhost:8084/registerNewApplicant";
 
  constructor(private httpClient: HttpClient) { }

  createApplicant(applicant: Applicant): Observable<Object>{
    return this.httpClient.post(`${this.regPath}`, applicant);
  }
}
