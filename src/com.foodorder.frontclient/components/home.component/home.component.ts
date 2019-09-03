import { Component, OnInit } from '@angular/core';
import {FoodService} from '../../services/food.service';
import {Food} from '../../models/food.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private size = 5;
  private page = 0;
  private sort = '';
  private sortByArray  = [
    {name: 'id'},
    {name: 'name'},
    {name: 'price'}
  ];
  private foods: Array<Food>;
  private pages: Array<number>;
  private foodName: string;
  private food: Food;

  constructor(private foodService: FoodService) { }
  setPage(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.getAllFood();
  }

  setSize(i, event: any) {
    event.preventDefault();
    this.size = i;
    this.page = 0;
    this.getAllFood();
  }

  setSort(event: any) {
    event.preventDefault();
    this.sort = event.target.value;
    this.page = 0;
    this.getAllFood();
  }

  ngOnInit() {
    this.getAllFood();
  }

  public getAllFood() {
    this.foodService.getAllFood(this.page, this.size, this.sort)
      .subscribe(data => {
        this.foods = data['content'];
        this.pages = new Array(data['totalPages']);
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
