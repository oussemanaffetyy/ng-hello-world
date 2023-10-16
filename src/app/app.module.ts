import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExempleComponent } from './exemple/exemple.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormulaireComponent} from './formulaire/formulaire.component'
@NgModule({
  declarations: [
    AppComponent,
    ExempleComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
