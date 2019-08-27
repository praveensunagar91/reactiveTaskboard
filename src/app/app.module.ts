import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AlltasksComponent } from './alltasks/alltasks.component';

@NgModule({
  declarations: [
    AppComponent,
    AlltasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


