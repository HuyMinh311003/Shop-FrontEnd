import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getAllBook() {
    return this.http.get(`${environment.api_url}item/all`);
  }

  postBook(body: any) {
    return this.http.post(`${environment.api_url}item/create`, body).subscribe();
  }
}
