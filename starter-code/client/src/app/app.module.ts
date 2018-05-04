import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router'
import { routes } from './my-route.routing'

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesService } from './recipes.service';
import { IngredientsService } from './ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipesListComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
