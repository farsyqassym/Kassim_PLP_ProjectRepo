import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idea } from '../_Class/idea';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  constructor(private httpClient: HttpClient) { }

  baseURL = "http://localhost:8084/ideas";

  getIdeaList(): Observable<Idea[]>{
    return this.httpClient.get<Idea[]>(`${this.baseURL}`);
  }

  saveIdea(idea: Idea): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, idea);
  }
}
