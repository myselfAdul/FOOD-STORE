import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { NgFor, NgIf } from '@angular/common';
import { Food } from '../shared/models/food';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  foods: Food[] = [];
  searchTerm: string = '';

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

  searchFoods(): Food[] {
    if (!this.searchTerm) {
      return this.foods;
    }
    // console.log("pizza")
    return this.foods.filter((food) =>
      food.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get hasNoResult(): boolean {
    return this.searchTerm.length > 0 && this.searchFoods().length === 0;
  }
}
