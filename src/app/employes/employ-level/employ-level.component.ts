import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employ-level',
  templateUrl: './employ-level.component.html',
  styleUrls: ['./employ-level.component.css']
})
export class EmployLevelComponent implements OnInit {

  @Input() selectedEmploy: any;

  constructor() { }

  ngOnInit() {
  }

}
