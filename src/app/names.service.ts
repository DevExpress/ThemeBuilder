import { Injectable } from '@angular/core';

@Injectable()
export class NamesService {

    private ORDER_REGEX = /^(\d+).\s/;

    getRealName(orderedName): string {
        return orderedName.replace(this.ORDER_REGEX, '');
    }

    getHighlightedForLeftMenuName(orderedName, searchText): string {
        const text = this.getRealName(orderedName);
        if(!searchText) return text;

        const escapedSearch = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return text.replace(new RegExp(`(${escapedSearch})`, 'ig'), '<span class="search-highlight">$1</span>');
    }

    sortNames(name1, name2): number {
        const redix = 10;
        return Number.parseInt(name1, redix) - Number.parseInt(name2, redix);
    }
}
