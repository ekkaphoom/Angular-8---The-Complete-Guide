import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

// @Injectable({
//   providedIn: 'root'
// })
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  getRecipes() {
    console.log(this.recipes);
    return this.recipes;
  }
  getRecipe(id: number) {
    console.log(id, this.recipes.slice()[id]);
    return this.recipes.slice()[id];
  }
}
