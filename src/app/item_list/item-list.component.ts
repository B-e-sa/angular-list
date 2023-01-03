import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import Item from './item';
import { ItemService } from './item.service';

@Component({
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.sass']
})
export class ItemListComponent implements OnInit {

    filteredItems: Item[] = [];

    _items: Item[] = [];

    _filterBy: string = '';

    constructor(private itemService: ItemService) { };

    retrieveAll(): void {
        this.itemService.retrieveAll().subscribe({
            next: (items: Item[]) => {
                this._items = items;
                this.filteredItems = this._items;
            },
            error: err => console.error('Error! ', err)
        });

        this.filteredItems = this._items;
    };

    ngOnInit(): void { this.retrieveAll() };

    set filter(value: string) {

        this._filterBy = value;

        this.filteredItems = this._items.filter((item: Item) => {
            item.name
                .toLocaleLowerCase()
                .indexOf(this._filterBy.toLocaleLowerCase()) > -1
        });

    };

    get filter() { return this._filterBy };

}