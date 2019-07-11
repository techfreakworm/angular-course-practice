import { Recipe } from './recipe.model';

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is simple a test', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKqRSrKvWvPOq37JYlK2Daz0MLKRbQxZst0cDBbH167mqrAV9"),
        new Recipe('Another Test Recipe','This is simple a test', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKqRSrKvWvPOq37JYlK2Daz0MLKRbQxZst0cDBbH167mqrAV9")
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}