import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations:[
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'courses', pathMatch: 'full'}, //path vazio é o base
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
