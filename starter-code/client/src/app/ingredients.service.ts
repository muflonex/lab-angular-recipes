import { Injectable } from '@angular/core';
import 'rxjs'
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable'

export interface list {
  _id: number;
  name: string;
  image: string;
  description: string;
}

@Injectable()
export class IngredientsService {
  BASE_URL='http://localhost:3000'
  list: Array<list> = [];

constructor(private http: Http) { }
getList(): Observable<any> {
  return this.http.get(`${this.BASE_URL}/api/ingredients`)
  .map((res: Response) => res.json());
}
pushToBase(recipe_id, ingredient_id, qty){
  return this.http.post(`${this.BASE_URL}/api/dishes/${recipe_id}/ingredients/${ingredient_id}/add`, {quantity:qty})
  .map(res => res.json())
}
}
