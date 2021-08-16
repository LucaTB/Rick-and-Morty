import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly API_URL: string = environment.api_url;

  constructor (private http: HttpClient) { }

  public getInfo(endPoint: string) {
    return this.http.get(this.API_URL + endPoint);
  }
}
