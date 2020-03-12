import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  url: string = 'https://glacial-cove-90138.herokuapp.com/api/smart-devices'

  constructor(private http: HttpClient) { }

  getDevices(): Observable<any> {
    return this.http.get<any>(`${this.url}`)
  }

  getDevice(id): Observable<any> {
    return this.http.get(`${this.url}/${id}`)
  }

  createDevice(device): Observable<any> {
    return this.http.post<any>(`${this.url}`, device)
  }

  deleteDevice(id): Observable<any> {
    return this.http.delete(`${this.url}/${id}`)
  }

  updateDevice(id, device): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, device)
  }


}
