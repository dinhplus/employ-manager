import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employ } from '../employ';
import { uniqueNamesGenerator, Config, names} from 'unique-names-generator';

const customConfig: Config = {
  dictionaries: [names],
  separator: ' ',
  length: 3,
};
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employes = [
      {
        id: 1,
        name: 'Đỗ Xuân Đình',
        salary: 300,
        level: 6
      },
      {
        id: 2,
        name: 'Daniel Do',
        salary: 400,
        level: 7
      },
      {
        id: 3,
        name: 'Lưu Minh Sâm',
        salary: 1000,
        level: 9
      },
      {
        id: 4,
        name: 'Nguyễn Đình Đạt',
        salary: 800,
        level: 8
      },
      {
        id: 5,
        name: 'Trần Quốc Vượng',
        salary: 700,
        level: 7
      },
      {
        id: 6,
        name: 'Ami Qua',
        salary: 200,
        level: 5
      },
      {
        id: 7,
        name: 'Vũ Hải Long',
        salary: 600,
        level: 7
      },
      {
        id: 8,
        name: 'Phạm Thị Nhài',
        salary: 300,
        level: 8
      },
    ];

    return { employes };
  }

  genId(employes: Employ[]): number {
    return employes.length > 0 ? Math.max(...employes.map(employ => employ.id)) + 1 : 11;
  }
}
