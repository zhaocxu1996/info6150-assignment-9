import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  // fetch all the todo resources from server
  public list(): Observable<Array<Contact>> {
    const contacts$ = this.http.get<Contact[]>('http://localhost:3000/todo');
    return contacts$;
  }

  // look for one todo resource by id
  public getOne(id: number): Observable<Contact> {
    const contact$ = this.http.get<Contact>(`http://localhost:3000/todo/${id}`);
    return contact$;
  }

  // send a new todo resource to the server, then save it to the database
  public add(contact: Contact): Observable<Contact> {
    let todo = {
      "content":[
        {
          "title":contact.title,
          "description":contact.description,
          "due_date":contact.due_date
        }
      ]
    };
    console.log(todo);
    const contact$ = this.http.post<Contact>('http://localhost:3000/todo', todo);
    return contact$;
  }

  // delete one todo resource
  public delete(id: number) {

  }
}
