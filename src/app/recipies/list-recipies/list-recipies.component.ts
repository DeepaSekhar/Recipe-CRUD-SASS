import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';
import { RecipeService } from "../recipe.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";


@Component({

  templateUrl: './list-recipies.component.html',
  styleUrls: ['./list-recipies.component.scss']
})
export class ListRecipiesComponent implements OnInit {
  recipe: Recipe;
  recipies: Recipe[];
  recipeList: Recipe[];

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.recipies = this.recipeService.getRecipes();
  }
  editRecipe(recipe: Recipe) {
    console.log('/edit', recipe.id)
    this.router.navigate(['/edit', recipe.id]);

  }

  deleteRecipe(recipe: Recipe) {
    console.log("recipie=", recipe.id);
    this.recipeService.deleteRecipe(recipe.id);
  }
}

