import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/recipe.model';
import { RecipeService } from "../recipe.service"
import { Router } from "@angular/router"

@Component({

  templateUrl: './list-recipies.component.html',
  styleUrls: ['./list-recipies.component.scss']
})
export class ListRecipiesComponent implements OnInit {
  recipe: Recipe;
  recipies: Recipe[];
  recipeList: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipies = this.recipeService.getRecipe()
  }

  deleteRecipe() {
    // let index = this.recipeList.indexOf(recipe);
    // this.recipeList.splice(index, 1);
    this.recipeService.deleteRecipe(this.recipe.id);
  }
}

