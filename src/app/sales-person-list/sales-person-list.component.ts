import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  // Create an array of objects
  salesPersonList:SalesPerson[]=[
    new SalesPerson("Oguz","Aslan","oguzaslan@hotmail.com",5000),
    new SalesPerson("Ali","Veli","deneme1@hotmail.com",4000),
    new SalesPerson("Ayse","Fatma","deneme2@hotmail.com",3000),
    new SalesPerson("Zeynep","Merve","deneme3@hotmail.com",2000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
