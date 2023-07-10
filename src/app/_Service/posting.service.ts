import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posting } from '../_Class/posting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  baseURL = "http://localhost:8084/competitions";

  constructor(private httClient: HttpClient) { }

  sendPost(posting: Posting): Observable<Object>{
    return this.httClient.post(`${this.baseURL}`, posting);
  }
}
