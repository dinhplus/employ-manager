import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-employ-stock',
  templateUrl: './employ-stock.component.html',
  styleUrls: ['./employ-stock.component.css']
})
export class EmployStockComponent implements OnInit {

  @Input() employes: any;

  constructor() { }

  ngOnInit() {
  }

}
