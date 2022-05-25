import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { DataService } from './data.service';
import { Employ } from '../employ';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})

export class EmployesComponent implements OnInit {

  constructor(private dataService: DataService ) { }

  @Input() selectedEmploy: any;
  @Input() employes: Employ[];

  recieveExistingEmployes($event: Employ[]): void {
    this.employes = $event;
  }

  receiveEmploy($event: any) {
    this.selectedEmploy = $event;
  }

  getEmployes(): void {
    this.dataService.getEmployes()
      .subscribe(employes => this.employes = employes);
  }

  ngOnInit() {
    this.getEmployes();
  }

  add(name: string, salary: number, level: number): void {
    name = name.trim();
    this.dataService.addEmploy({ name, salary, level } as unknown as Employ)
      .subscribe((employ: any) => {
        this.employes.push(employ);
      });
  }

  delete(employ: Employ): void {
    if (confirm('Delete ' + employ.name + ' ?')) {
      this.employes = this.employes.filter(h => h !== employ);
      this.dataService.deleteEmploy(employ).subscribe();
      this.selectedEmploy = '';
    }
  }
}
