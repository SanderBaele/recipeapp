import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: '', redirectTo: 'recipe-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
