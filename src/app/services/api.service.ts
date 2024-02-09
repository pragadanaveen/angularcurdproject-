import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl="../../assets/data.json";

  constructor(private http:HttpClient) { }


getEmploy()
{


  return this.http.get(this.baseUrl)
}
}
