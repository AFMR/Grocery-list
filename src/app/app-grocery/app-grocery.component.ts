import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListDataService } from '../list-data.service';
import { ListData } from '../ListData';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['./app-grocery.component.css']
})
export class AppGroceryComponent implements OnInit {

  listName: string
  listData: ListData

  constructor(private route: ActivatedRoute, private service: ListDataService) {
    this.route.params.subscribe( params =>
      this.listName = params.listName.toString())
   }

   addItem(newItem: string){
      this.service.addItem(this.listName, newItem)
    }

  ngOnInit() {
      this.listData = this.service.getlistData(this.listName)
  }

}
