import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is simple a test', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKqRSrKvWvPOq37JYlK2Daz0MLKRbQxZst0cDBbH167mqrAV9", [new Ingredient("Bread", 2), new Ingredient("Flour", 3)]),
        new Recipe('Another Test Recipe','This is simple a test', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKqRSrKvWvPOq37JYlK2Daz0MLKRbQxZst0cDBbH167mqrAV9", [new Ingredient("Potato", 4), new Ingredient("Tomato", 5)])
      ];

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slService: ShoppingListService){

    }

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}