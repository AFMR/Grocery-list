export class ListData{
    //constructor(public listName: string, public items: { [checkBoxText : string] : boolean})
    constructor(public listName: string, public items: Map<string, boolean>)
    {
    }
}