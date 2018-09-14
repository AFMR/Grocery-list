import { Injectable } from '@angular/core';
import { ListData } from './ListData';
import { ShoppingItem } from './ShoppingItem';

@Injectable({
  providedIn: 'root'
})

export class ListDataService {

  listsData: { [listName : string] : ListData} = { }

  constructor() { 
    //this.listsData["list"] = new ListData('Grocery list', [new ShoppingItem('Onions', false), new ShoppingItem('Tomatoes', false), new ShoppingItem('Carrots', false)])
    //this.listsData["online"] = new ListData('Online shopping', [new ShoppingItem('Batteries', false), new ShoppingItem('Power', false), new ShoppingItem('Socks', false)])
    //this.listsData["other"] = new ListData('Other list', [new ShoppingItem('Gifts', false), new ShoppingItem('Sweater', true), new ShoppingItem('Art supplies', false)])
    
    this.listsData["list"] = new ListData('Grocery list', new Array<ShoppingItem>())
    this.listsData["online"] = new ListData('Online shopping', new Array<ShoppingItem>())
    this.listsData["other"] = new ListData('Other list', new Array<ShoppingItem>())
    }

    getlistData(listName : string) : ListData {
      return this.listsData[listName]
    }
    
    addItem(listName: string, newItem: string){
      this.listsData[listName].items.push(new ShoppingItem(newItem, false))
    }
  }

