import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-destaque',
  templateUrl: './card-destaque.component.html',
  styleUrls: ['./card-destaque.component.css']
})
export class CardDestaqueComponent implements OnInit {


  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription:string =""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
