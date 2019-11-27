import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  name: string;
  recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: ActivatedRoute) { }

  ngOnInit() {
    const name = this.router.params.subscribe((params: Params) => {
      this.name = params['name'];
      this.recipe = this.recipeService.getRecipe(this.name);
    });
  }

}
