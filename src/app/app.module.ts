import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './player/list/list.component';
import { CreateComponent } from './player/create/create.component';
import { EditComponent } from './player/edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DeleteComponent } from './player/delete/delete.component';
import { DetailComponent } from './player/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    DetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
