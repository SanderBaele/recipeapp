import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeDataService } from '../recipe-data.service';
import { RatingComponent } from 'src/app/rating/rating.component';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() public recipe: Recipe;

  constructor(private _recipeDataService: RecipeDataService) {}

  ngOnInit() {}

  adjustRating(clickObj: any): void {
    this._recipeDataService
      .rateRecipe(this.recipe, this.recipe.rating)
      .subscribe(
        () => {
          this.recipe.rating = clickObj.rating;
        },
        () => {
          this.recipe.rating = 0;
        }
      );
  }
}
