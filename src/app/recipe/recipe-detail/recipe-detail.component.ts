import {Component, OnInit} from '@angular/core';

import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  recipeId: number;

  constructor(private recipeService: RecipeService, private  sls: ShoppingListService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  onEdit() {
    this.router.navigate(['/rezepte', this.recipeId, 'bearbeiten']);
  }

  onAddToList() {
    this.sls.addIngrendients(this.selectedRecipe.ingredients);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.recipeId = +params['id'];
      this.selectedRecipe = this.recipeService.getRecipe(this.recipeId);
    });
  }
}
