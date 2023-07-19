import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals';

  constructor(private Http: HttpClient) { }

  remove(id: Number) {
    return this.Http.delete<Animal>(`${this.apiUrl}/${id}`)
  }

  getAll(): Observable<Animal[]> {
    return this.Http.get<Animal[]>(this.apiUrl)
  }

  getItem(id: number): Observable<Animal> {
    return this.Http.get<Animal>(`${this.apiUrl}/${id}`)
  }

}
