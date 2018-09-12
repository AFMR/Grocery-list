import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['./app-grocery.component.css']
})
export class AppGroceryComponent implements OnInit {
  list: Array<string> = [
    "algo",
    "Take a nap",
    "Do something"
  ]

  constructor() { }

  ngOnInit() {
  }

}
