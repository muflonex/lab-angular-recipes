import { Routes, RouterModule } from '@angular/router';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientsService } from './ingredients.service';

export const routes: Routes = [
  { path:'', component: RecipesListComponent },
  { path:'recipe/:id', component: RecipeComponent},
];
