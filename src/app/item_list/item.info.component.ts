import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import Item from './item';
import { ItemService } from './item.service';

@Component({
    templateUrl: './item.info.component.html',
    styleUrls: ['./item.info.component.sass']
})
export class ItemInfoComponent implements OnInit {

    item!: Item;

    _idParam!: number;

    constructor(
        private activatedRoute: ActivatedRoute,
        private itemService: ItemService
    ) { };

    ngOnInit(): void {

        this._idParam = Number(this.activatedRoute.snapshot.paramMap.get('id'));

        this.itemService.retrieveById(this._idParam).subscribe({
            next: (item: Item) => this.item = item,
            error: err => console.error('Error!', err)
        });

    };

    save(): void { 
        this.itemService.save(this.item).subscribe({
            next: item => console.log('Saved with success', item),
            error: err => console.error('Error', err)
        }) 
    };

};