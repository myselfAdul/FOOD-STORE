import { Injectable } from '@angular/core';
// import { Food } from '../../shared/models/food';
import { Food } from '../../shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAllFoodByTag(tag: string): Food[] {
    return tag == 'All'
      ? this.getAllFood()
      : this.getAllFood().filter((food) => food.tags?.includes(tag));
  }

  getAllFood(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        price: 10.99,
        tags: ['Italian', 'Cheesy'],
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/food1.avif',
        origins: ['Italy', 'bd'],
        cookTime: '30 mins',
      },
      {
        id: 2,
        name: 'Burger',
        price: 8.99,
        tags: ['American', 'Meaty'],
        favorite: true,
        stars: 4.0,
        imageUrl: 'assets/food2.avif',
        origins: ['USA'],
        cookTime: '15 mins',
      },
      {
        id: 3,
        name: 'Sushi',
        price: 12.99,
        tags: ['Japanese', 'Seafood'],
        favorite: false,
        stars: 4.8,
        imageUrl: 'assets/food3.avif',
        origins: ['Japan'],
        cookTime: '20 mins',
      },
      {
        id: 4,
        name: 'Tacos',
        price: 9.99,
        tags: ['Mexican', 'Spicy'],
        favorite: false,
        stars: 4.3,
        imageUrl: 'assets/food4.avif',
        origins: ['Mexico'],
        cookTime: '10 mins',
      },
      {
        id: 5,
        name: 'Pasta',
        price: 11.99,
        tags: ['Italian', 'Noodles'],
        favorite: true,
        stars: 4.7,
        imageUrl: 'assets/food5.avif',
        origins: ['Italy'],
        cookTime: '25 mins',
      },
      {
        id: 6,
        name: 'Salad',
        price: 7.99,
        tags: ['Healthy', 'Fresh'],
        favorite: false,
        stars: 4.1,
        imageUrl: 'assets/food6.avif',
        origins: ['Various'],
        cookTime: '5 mins',
      },
    ];
  }
}
