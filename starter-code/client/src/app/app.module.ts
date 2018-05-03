import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router'
import { routes } from './my-route.routing'

import { AppComponent } from './app.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesService } from './recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesListComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
