import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employ } from '../employ';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employes = [
      {
        id: 1,
        name: 'Nokia Lumia',
        price: 300,
        rating: 6
      },
      {
        id: 2,
        name: 'Sony Xperia',
        price: 400,
        rating: 7
      },
      {
        id: 3,
        name: 'Apple Iphone',
        price: 1000,
        rating: 9
      },
      {
        id: 4,
        name: 'Samsung Galaxy',
        price: 800,
        rating: 8
      },
      {
        id: 5,
        name: 'Blackberry Pearl',
        price: 700,
        rating: 7
      },
      {
        id: 6,
        name: 'Huawei P10',
        price: 200,
        rating: 5
      },
      {
        id: 7,
        name: 'LG G40',
        price: 600,
        rating: 7
      },
      {
        id: 8,
        name: 'Oneplus 6T',
        price: 300,
        rating: 8
      },
    ];

    return { employes };
  }

  genId(employes: Employ[]): number {
    return employes.length > 0 ? Math.max(...employes.map(employ => employ.id)) + 1 : 11;
  }
}
