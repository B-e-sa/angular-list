import Item from "./item";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    retrieveAll(): Item[] {
        return ITEMS;
    }

}

let ITEMS: Item[] = [
    {
        id: 1,
        name: 'Risotto',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
    {
        id: 2,
        name: 'Pizza',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
    {
        id: 3,
        name: 'Sushi',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
    {
        id: 4,
        name: 'Steak',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
    {
        id: 5,
        name: 'Shrimp',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
    {
        id: 6,
        name: 'Pasta',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
    {
        id: 7,
        name: 'Oyster',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
    {
        id: 8,
        name: 'Lasagna',
        image: '../../assets/pizza.jpg',
        date: '12/12/12',
        price: 5,
        rating: 5
    },
]