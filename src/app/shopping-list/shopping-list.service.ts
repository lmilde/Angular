import {Ingredient} from '../shared/ingredient-model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  getIngredients() {
    return this.ingredients;
  }

  addIngrendients(ingredients: Ingredient[]) {
    Array.prototype.push.apply(this.ingredients, ingredients);
  }

  addIngredient(ingredient: Ingredient) {
   this.ingredients.push(ingredient);
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
  }
}
