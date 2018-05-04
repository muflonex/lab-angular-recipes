import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { IngredientsService } from "../ingredients.service";

@Component({
  selector: "app-recipe",
  templateUrl: "./recipe.component.html",
  styleUrls: ["./recipe.component.css"]
})
export class RecipeComponent implements OnInit {
  recipe: Object;
  ingredientsArray: Array<Object> = [] 

  constructor(
    route: ActivatedRoute,
    public router: Router,
    private recipes: RecipesService,
    public ingredients: IngredientsService
  ) {
    route.params.subscribe(recipe => {
      recipes.getEntry(recipe.id).subscribe(e => {
        this.recipe = e;
      });
    });
  }

  ngOnInit() {
    this.ingredients.getList().subscribe(ingredients => {
      ingredients.forEach(element => {
        if (!/(jpg|png|jpeg)$/g.test(element.image))
          element.image = "../../assets/download.jpeg";

        this.ingredientsArray.push(element);
      });
    });
  }
  addIngredient(recipe, ingredient, qty){
    this.ingredients.pushToBase(recipe, ingredient, qty).subscribe(e=> this.recipe = e)
  }
}
