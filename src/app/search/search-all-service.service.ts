import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchAllServiceService {
  constructor() { }

  private fooData = {
    food: 'custard'
  }

  public getSearch(searchTerm: string): Observable<any> {
    return of(this.fooData)
  }
}
