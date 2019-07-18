import { Component, OnInit } from '@angular/core';
import {FoodService} from '../../services/food.service';
import {Food} from '../../models/food.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foodName: string;
  foods: Food[];
  food: Food;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
  }

  public getAllFood(): void {
    this.foodService.getAllFood()
      .subscribe(data => {
        this.foods = data;
      }, error => {
        console.log(error);
      });

    console.log(this.foods);
  }

  public getFoodByName(): void {
    this.foodService.getFoodByName(this.foodName).subscribe( data => {
      this.food = data;
    }, error => {
      console.log(error);
    });

    console.log(this.food);
  }

  public findFoodByName(): void {
    this.foodService.findFoodByName(this.foodName).subscribe(data => {
      this.foods = data;
    }, error => {
      console.log(error);
    });
    console.log(this.foods);
  }


}
