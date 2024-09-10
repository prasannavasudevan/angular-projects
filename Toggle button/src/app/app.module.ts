import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // If using forms (like ngModel)
import { CommonModule } from '@angular/common'; // If using ngIf, ngFor, etc.

import { AppComponent } from './app.component';  // Main component of the app

@NgModule({
  declarations: [
    AppComponent,  // Declare components here
  ],
  imports: [
    BrowserModule, // Essential for any web application
    FormsModule,   // Import for two-way data binding (ngModel)
    CommonModule,  // Import for directives like ngIf, ngFor
  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstrap the main app component
})
export class AppModule { }
