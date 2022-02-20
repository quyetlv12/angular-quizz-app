import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http : HttpClient
  ) { }
  BASE_URL_API = "https://6212177801ccdac07431cc53.mockapi.io/categories"
  getCategory(){
    return this.http.get<[]>(this.BASE_URL_API)
  }
}
