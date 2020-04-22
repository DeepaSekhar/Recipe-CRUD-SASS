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
  createRecipe: Recipe
  recipe: Recipe
  id: number
  name: string
  photo: string
  description: string
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
    if (id === 0) {
      this.recipe = {
        id: null,
        name: null,
        photo: null,
        description: null,
      }
    }
    else {
      this.recipe = this.recipeService.getRecipe(id);
    }
  }
  saveRecipe(): void {
    this.createRecipe = {
      id: this.id,
      name: this.name,
      photo: this.photo,
      description: this.description
    }
    this.recipeService.save(this.createRecipe)
    this.router.navigate(['list'])
  }
}


