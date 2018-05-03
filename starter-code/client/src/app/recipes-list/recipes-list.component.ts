import { Component, OnInit } from "@angular/core";
import { RecipesService } from "../recipes.service";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  recipesArray: Array<Object> = [];

  constructor(public list: RecipesService) {}

  ngOnInit() {
    this.list.getList().subscribe(list => {
      list.forEach(element => {
        if (!/(jpg|png|jpeg)$/g.test(element.image))
          element.image = "../../assets/download.jpeg";

        this.recipesArray.push(element);
      });
    });
  }
}
