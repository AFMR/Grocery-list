import { ShoppingItem } from "./ShoppingItem";

export class ListData{
    constructor(public listName: string, public items: Array<ShoppingItem>)
    {
    }
}