import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeResolver } from './recipe/recipe-resolver';

const appRoutes: Routes = [
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  {
    path: 'recipe-detail/:id',
    component: RecipeDetailComponent,
    resolve: { recipe: RecipeResolver }
  },
  { path: '', redirectTo: 'recipe-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
