import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../recipe.service';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;

  constructor(private recipeService: RecipeService) { }

  onSubmit() {
    const newRecipe = this.recipeForm.value;
    this.recipeService.addRecipe(newRecipe);
  }

  onAddIngredientControl(name: string, amount: string) {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(name, Validators.required),
        'amount': new FormControl(amount, Validators.required)
      })
    );
  }

  onRemoveIngredientControl(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  ngOnInit() {
    this.recipeForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'imagePath': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'ingredients': new FormArray([
        // new FormGroup({
        //   'name': new FormControl(null, Validators.required),
        //   'amount': new FormControl(null, Validators.required)
        // })
      ])
    });
  }

}
