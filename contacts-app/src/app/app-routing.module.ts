import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contacts/list/list.component';
import { ContactViewComponent } from './contacts/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent
  },
  {
    path: 'contacts/:id',
    component: ContactViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
