import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employ-rating',
  templateUrl: './employ-rating.component.html',
  styleUrls: ['./employ-rating.component.css']
})
export class EmployRatingComponent implements OnInit {

  @Input() selectedEmploy: any;

  constructor() { }

  ngOnInit() {
  }

}
