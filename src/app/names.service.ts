import { Injectable } from '@angular/core';

@Injectable()
export class NamesService {

    constructor() { }

    private ORDER_REGEX = /^(\d+).\s/;

    getRealName = (orderedName) => orderedName.replace(this.ORDER_REGEX, '');

    sortNames = (name1, name2) => {
        const orders = [name1, name2].map((value) => Number.parseInt(value.match(this.ORDER_REGEX)[1]));
        return orders[0] - orders[1];
    }
}
