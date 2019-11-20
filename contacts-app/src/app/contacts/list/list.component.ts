import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact.model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ContactListComponent implements OnInit {
  newContact: Contact;
  contacts: Array<Contact>;
  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.contactService.list().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  sayHi(): string {
    return 'Hi!';
  }

  updateName(event: Event, contact: Contact) {
    const target: any = event.target;
    const newValue = target.value;
    contact.title = newValue;
  }

  viewDetail(contact: Contact) {
    this.router.navigate(['contacts', contact.id]);
  }

  add() {
    this.router.navigate(['contacts', -1]);
  }

  complete(contact: Contact) {
    contact.completed = true;
  }
}
