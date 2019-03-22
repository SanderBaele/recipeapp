import { Component, OnInit, Input } from '@angular/core';
import { RecipeDataService } from '../recipe-data.service';
import { Observable, Subject } from 'rxjs';
import { Recipe } from '../recipe.model';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public filterRecipeName: string;
  public filterRecipe$ = new Subject<string>();

  private _fetchRecipes$: Observable<Recipe[]> = this._recipeDataService
    .recipes$;
  public loadingError$ = this._recipeDataService.loadingError$;

  constructor(private _recipeDataService: RecipeDataService) {
    this.filterRecipe$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterRecipeName = val));
  }

  ngOnInit() {}

  get recipes$() {
    return this._fetchRecipes$;
  }
}
