import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './player/list/list.component';
import {CreateComponent} from './player/create/create.component';
import {EditComponent} from './player/edit/edit.component';
import {DeleteComponent} from './player/delete/delete.component';


const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  }, {
    path: 'create',
    component: CreateComponent
  }, {
    path: 'edit/:id',
    component: EditComponent
  }, {
  path: 'delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
