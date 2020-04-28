import { Component, OnInit } from '@angular/core';
import { Recipe } from "../../../models/recipe.model"
import { NgForm } from "@angular/forms"
import { RecipeService } from "../recipe.service"
import { Router } from "@angular/router"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-edit-recipies',
  templateUrl: './edit-recipies.component.html',
  styleUrls: ['./edit-recipies.component.scss']
})
export class EditRecipiesComponent implements OnInit {
  editedRecipe: Recipe;
  recipe: Recipe
  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parmeterMap => {
      const id = +parmeterMap.get('id');
      this.getRecipe(id);
    })
  }
  getRecipe(id: number): void {
    console.log(id);
    this.recipe = this.recipeService.getRecipeById(id);
  }
  editRecipe(): void {
    this.router.navigate(['list'])
  }
}


