import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute } from '@angular/router';
import { RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeDataService: RecipeDataService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipeDataService
      .getRecipe$(id)
      .subscribe(item => (this.recipe = item));
  }
}
