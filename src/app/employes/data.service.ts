import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Employ } from '../employ';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private employesUrl = 'api/employes';
  employesLength: number;
  employes: Employ[];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  addEmploy(employ: Employ): Observable<Employ> {
    return this.http.post<Employ>(this.employesUrl, employ, this.httpOptions);
  }

  updateEmploy(employ: Employ): Observable<any> {
    return this.http.put(this.employesUrl, employ, this.httpOptions);
  }

  deleteEmploy(employ: Employ | number): Observable<Employ> {
    const id = typeof employ === 'number' ? employ : employ.id;
    const url = `${this.employesUrl}/${id}`;
    return this.http.delete<Employ>(url, this.httpOptions);
  }

  getEmployes(): Observable<Employ[]> {
    return this.http.get<Employ[]>(this.employesUrl);
  }

  getEmployById(id: number | string): Observable<Employ> {
    const url = `${this.employesUrl}/${id}`;
    return this.http.get<Employ>(url);
  }

  getNumberOfEmployes(): Observable<number> {
    return this.http.get<number>(this.employesUrl);
  }

}
