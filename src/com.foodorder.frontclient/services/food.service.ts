import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Food} from '../models/food.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private API_URL_LOCAL = 'http://localhost:8082/';
  private API_FOOD_SERVICE_ENDPOINT = 'food-service/foods';
  private API_GET_FOOD_BY_NAME_ENDPOINT = '/find?name=';

  constructor(private  http: HttpClient) {}

  public getAllFood(): Observable<Food[]> {
    return this.http.get<Food[]>(this.API_URL_LOCAL + this.API_FOOD_SERVICE_ENDPOINT);
  }

  public findFoodByName(foodName: string): Observable<Food[]> {
    return this.http.get<Food[]>(this.API_URL_LOCAL + this.API_FOOD_SERVICE_ENDPOINT + this.API_GET_FOOD_BY_NAME_ENDPOINT + foodName);
  }

  public getFoodByName(foodName: string): Observable<Food> {
    return this.http.get<Food>(this.API_URL_LOCAL + this.API_FOOD_SERVICE_ENDPOINT + '/' + foodName);
  }

}
