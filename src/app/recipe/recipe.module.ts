import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeFilterPipe } from './recipe-filter.pipe';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    RecipeComponent,
    IngredientComponent,
    AddRecipeComponent,
    RecipeFilterPipe,
    RecipeListComponent
  ],
  imports: [CommonModule, MaterialModule, HttpClientModule, ReactiveFormsModule]
})
export class RecipeModule {}
