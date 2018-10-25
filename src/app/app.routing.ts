import {RouterModule, Routes} from '@angular/router';
import {RecipeComponent} from './recipe/recipe.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/rezepte', pathMatch: 'full'},
  {path: 'rezepte', component: RecipeComponent},
  {path: 'einkaufsliste', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
