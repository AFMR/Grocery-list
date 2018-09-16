import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListDataService } from '../list-data.service';
import { ListData } from '../ListData';
import { ShoppingItem } from '../ShoppingItem';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['./app-grocery.component.css']
})
export class AppGroceryComponent implements OnInit {

  listName: string
  listData: ListData
  itemsArray: Array<ShoppingItem> = new Array<ShoppingItem>()

  constructor(private route: ActivatedRoute, private service: ListDataService) { }

  addItem(newItem: string){
    this.service.addItem(this.listName, newItem)
  }

  clearList(){
    this.service.clearList(this.listName)
  }

  checkBoxValueChanged(e){
    this.service.changeItemStatus(this.listName, e.target.id.toString(), e.target.checked)
  }

  ngOnInit() {
    this.route.params.subscribe(
    params => this.listName = params.listName.toString())

    this.listData = this.service.getlistData(this.listName)

    for (let [k, v] of this.listData.items) {
      this.itemsArray.push(new ShoppingItem(k, v))
    }
  }
}
