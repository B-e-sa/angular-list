import { ItemService } from './item.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import Item from './item';

@Component({
    templateUrl: './item.info.component.html',
    styleUrls: ['./item.info.component.sass']
})
export class ItemInfoComponent implements OnInit {

    item!: Item;

    idParam!: number;

    constructor(
        private activatedRoute: ActivatedRoute,
        private itemService: ItemService
    ) { };

    ngOnInit(): void {

        this.idParam = Number(this.activatedRoute.snapshot.paramMap.get('id'));

        [this.item] = this.itemService.retrieveById(this.idParam);

    };

    save(): void { this.itemService.save(this.item) };

};