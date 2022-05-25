import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Employ } from '../../employ';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employ-list',
  templateUrl: './employ-list.component.html',
  styleUrls: ['./employ-list.component.css']
})
export class EmployListComponent implements OnInit {

  @Input() employes: any;
  selectedEmploy: Employ;

  @Output() selectedEvent = new EventEmitter<any>();

  constructor(private dataService: DataService) { }

  ngOnInit() { }

  onSelect(employ: Employ): void {
    this.selectedEmploy = employ;
    this.sendEmploy();
  }

  sendEmploy() {
    this.selectedEvent.emit(this.selectedEmploy);
  }
}
