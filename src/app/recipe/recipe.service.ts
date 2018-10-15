import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient-model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Sehr lecker', 'https://static.chefkoch-cdn.de/ck.de/rezepte/268/268654/1023456-960x720-wiener-schnitzel.jpg',
      [new Ingredient('Pommes', 10), new Ingredient('Schnitzel', 1)]),
    new Recipe('Salat', 'Auch lecker', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcw7hs9KiG5VHyUa9kwzzhhAQPoebiUr9o7lRgUe4XkA6h8O88',
      [])
  ];

  recipeSelected = new EventEmitter<Recipe>()

  getRecipies() {
    return this.recipes;
  }
}
