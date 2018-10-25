import {Component, OnInit} from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService, private  sls: ShoppingListService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.selectedRecipe = this.recipeService.getRecipe(+params['id']));
  }

  onAddToList() {
    this.sls.addIngrendients(this.selectedRecipe.ingredients);
  }
}
