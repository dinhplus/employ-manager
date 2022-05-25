import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employ } from 'src/app/employ';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employ-detail',
  templateUrl: './employ-detail.component.html',
  styleUrls: ['./employ-detail.component.css']
})

export class EmployDetailComponent implements OnInit {

  @Input() selectedEmploy: any;
  @Output() selectedEvent = new EventEmitter<any>();
  @Output() existingEvent = new EventEmitter<any>();
  employes: Employ[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEmployes().subscribe(employes => this.employes = employes);
  }

  recieveEmploy($event: any): void {
    this.selectedEmploy = $event;
  }

  save(): void {
    this.dataService.updateEmploy(this.selectedEmploy).subscribe(() => this.hide());
  }

  hide(): void {
    this.selectedEmploy = '';
    this.selectedEvent.emit(this.selectedEmploy);
  }

  cancel(): void {
    this.hide();
    this.existingEvent.emit(this.employes);
  }

}
