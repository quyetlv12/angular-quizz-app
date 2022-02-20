import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private http : HttpClient
  ) { }
  BASE_URL_API = "https://6212177801ccdac07431cc53.mockapi.io"
  getQuestion(type): Observable<QuestionItf[]>{
    return this.http.get<QuestionItf[]>(`${this.BASE_URL_API}/${type}`)
  }
  addQuestion(type ,question){
    return this.http.post<QuestionItf[]>(`${this.BASE_URL_API}/${type}`,question)
  }
  deleteQuestion(type,id){
    return this.http.delete<QuestionItf>(`${this.BASE_URL_API}/${type}/${id}`)
  }
  updateQuestion(type,id,question){
    return this.http.delete<QuestionItf[]>(`${this.BASE_URL_API}/${type}/${id}`,question)
  }
}
