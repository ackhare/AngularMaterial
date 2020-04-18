import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: "root"
})
export class AngularDemoService {
  url: any;
  httpOptions: any;
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  fetchTodos(): Observable<any> {
    this.url = 'https://jsonplaceholder.typicode.com/todos';
    return this.httpClient.get(this.url, this.httpOptions);
  }
  fetchPosts(): Observable<any> {
    this.url = 'https://jsonplaceholder.typicode.com/posts';
    return this.httpClient.get(this.url, this.httpOptions);
  }

}
