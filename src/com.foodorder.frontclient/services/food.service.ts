import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Food} from '../models/food.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private API_URL_LOCAL = 'http://localhost:8082/';
  private API_FOOD_SERVICE_ENDPOINT = 'food-service/foods/';
  private API_GET_FOOD_BY_NAME_ENDPOINT = 'find?name=';
  private API_GET_FOOD_SET_PAGE = 'page=';
  private API_GET_FOOD_SET_SIZE = 'size=';
  private API_GET_FOOD_SET_SORT_BY = 'sort='
  constructor(private  http: HttpClient) {}

  public getAllFood(page: number, size: number, sort: string): Observable<Food[]> {
    return this.http.get<Array<Food>>(this.API_URL_LOCAL + this.API_FOOD_SERVICE_ENDPOINT + '?' +
      this.API_GET_FOOD_SET_PAGE + page + '&' +
      this.API_GET_FOOD_SET_SIZE + size + '&' +
      this.API_GET_FOOD_SET_SORT_BY + sort);
  }

  public findFoodByName(foodName: string): Observable<Food[]> {
    return this.http.get<Food[]>(this.API_URL_LOCAL + this.API_FOOD_SERVICE_ENDPOINT + this.API_GET_FOOD_BY_NAME_ENDPOINT + foodName);
  }

  public getFoodByName(foodName: string): Observable<Food> {
    return this.http.get<Food>(this.API_URL_LOCAL + this.API_FOOD_SERVICE_ENDPOINT + '/' + foodName);
  }

}
