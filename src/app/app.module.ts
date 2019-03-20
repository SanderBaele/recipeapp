import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IngredientComponent } from './ingredient/ingredient.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeFilterPipe } from './recipe-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    IngredientComponent,
    AddRecipeComponent,
    RecipeFilterPipe,
    RecipeListComponent,
    MainNavComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
