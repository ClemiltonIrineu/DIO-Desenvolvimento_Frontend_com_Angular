import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {


  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = ""

  @Input()
  Id:string="0"


  constructor() { }

  ngOnInit(): void {
  }

}
