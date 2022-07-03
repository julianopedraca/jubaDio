import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'courses', pathMatch: 'full'}, //path vazio é o base
      {path: 'courses', component: CourseListComponent},
      {path: 'courses/info/:id', component: CourseInfoComponent},
      {path: '**', component: Error404Component}  // '**' é quando não encontra a rota
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
