import { Injectable } from "@angular/core"
import { Recipe } from "../../models/recipe.model"



@Injectable()
export class RecipeService {

    private listRecipes: Recipe[] = [{
        id: 1,
        name: 'Chicken Biriyani',
        photo: 'assets/images/biriyani.jpeg',
        description: 'Biryani is a mixed rice dish with its origins in Indian subcontinent. It can be compared to mixing a curry, later combining it with semi-cooked rice separately. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region'
    },
    {
        id: 2,
        name: 'Grilled Tandoori Chicken',
        photo: 'assets/images/tandoori.jpg',
        description: 'Grilled chicken is grilled on a rack of burning coals or on an electric griller while Tandoori is cooked in an authentic Indian oven called Tandoor. The marination of Grilled chicken is simple, with few ingredients, Tandoori marination has ingredients Indian spices'
    },
    {
        id: 3,
        name: 'Chicken Tikka Masala',
        photo: 'assets/images/tikka.jpg',
        description: 'DescriptionChicken tikka masala is a dish of chunks of roasted marinated chicken in a spiced curry sauce. The sauce is usually creamy and orange-coloured. There are multiple claims to its place of origin such as the Indian subcontinent and the United Kingdom'
    },
    {
        id: 4,
        name: 'Chicken Tikka Masala',
        photo: 'assets/images/tikka.jpg',
        description: " Butter chicken originated from Northern India in 1948. you may notice that Butter Chicken known as murgh  is similar to British tikka masala. Prepared in a buttery gravy with the addition of cream gives the curry sauce a silky smooth rich texture."
    }



    ]
    getRecipe(): Recipe[] {
        return this.listRecipes

    }
    save(recipe: Recipe) {
        const dish = {
            ...recipe,
            id: this.listRecipes.length + 1

        }
        this.listRecipes.push(dish)
        console.log("listemployees.find", this.listRecipes)
    }
    deleteRecipe(id: number) {
        const i = this.listRecipes.findIndex(e => e.id === id);
        {
            if (i != -1) {
                this.listRecipes.splice(i, i)
            }
        }
    }
}