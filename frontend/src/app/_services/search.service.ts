import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  getAllSongs(){
    return this.http.get('http://localhost:8080/api/songs'); //from backend api 
  }
}
