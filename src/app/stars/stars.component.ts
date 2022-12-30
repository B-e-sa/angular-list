import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.sass']
})
export class StarsComponent implements OnInit {

    @Input()
    rating: number = 0;

    stars: number[] = [];

    ngOnInit(): void {
        for (let i = 0; i < this.rating; i++) {
            this.stars.push(0)
        };
    };

} 