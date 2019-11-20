import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router} from '@angular/router';
import { Time } from '@angular/common';

@Component({
  selector: 'app-contact-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ContactViewComponent implements OnInit {

  @Input() contact: Contact;
  id: number;
  title: string;
  description: string;
  date: Date;
  time: Time;

  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  // if id > 0, view page show the detail of a todo resource, else show the add todo page
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id == -1) {
      this.contact = {
        id: -1,
        title: '',
        description: '',
        due_date: '',
        completed: false
      }
    } else {
      this.contactService.getOne(this.id).subscribe(contact => {
        console.log(contact);
        this.contact = contact;
        console.log(this.contact);
      });
    }
  }

  // back to the index page
  index() {
    this.router.navigate(['']);
  }

  // save a todo resource
  saveTodo(due: string) {
    due = this.date.toString()+` ${this.time}`;
    this.contact.due_date = due;
    this.contactService.add(this.contact).subscribe(data => {
      console.log(data);
    });
  }
}
