import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public fetch(): Observable<Array<Todo>> {
    const todos$ = this.http.get<Todo[]>('http://localhost:3000/todo/fetch');
    return todos$;
  }

  // public add(post: Todo): Observable<Array<Todo>> {
  //   const result$ = this.http.post('http://localhost:3000/todo/add', post);
  //   return result$;
  // }
}
