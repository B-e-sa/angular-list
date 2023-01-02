import { ItemService } from './item.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import Item from './item';

@Component({
    templateUrl: './item.info.component.html'
})
export class ItemInfoComponent implements OnInit {

    course!: Item;

    idParam!: number;

    constructor(
        private activatedRoute: ActivatedRoute,
        private itemService: ItemService
    ) { };

    ngOnInit(): void {

        this.idParam = Number(this.activatedRoute.snapshot.paramMap.get('id'));

        this.course = this.itemService.retrieveById(this.idParam)[0];

    };

};