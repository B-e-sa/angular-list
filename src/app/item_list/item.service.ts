import Item from "./item";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ItemService {

    private itemsUrl: string = 'http://localhost:3100/api/items';

    constructor(private httpClient: HttpClient) { }

    retrieveAll(): Observable<Item[]> {
        return this.httpClient.get<Item[]>(this.itemsUrl);
    };

    retrieveById(id: number): Observable<Item> {
        return this.httpClient.get<Item>(`${this.itemsUrl}/${id}`)
    };

    save(modifiedItem: Item): Observable<Item> {
        if (modifiedItem.id) {
            return (
                this.httpClient
                    .put<Item>(`${this.itemsUrl}/${modifiedItem.id}`, modifiedItem)
            )
        } else {
            return this.httpClient.post<Item>(`${this.itemsUrl}`, modifiedItem)
        }
    };

    deleteById(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.itemsUrl}/${id}`)
    }
};

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
];