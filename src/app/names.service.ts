import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class NamesService {

    constructor(private sanitizer: DomSanitizer) { }

    private ORDER_REGEX = /^(\d+).\s/;

    getRealName = (orderedName) => orderedName.replace(this.ORDER_REGEX, '');

    getHighlightedForLeftMenuName = (orderedName, searchText) => {
        const text = this.getRealName(orderedName);
        if(!searchText) return text;

        const highlightedText = text.replace(new RegExp(`(${searchText})`, 'ig'), `<span style="color:#f05b41">$1</span>`);

        return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
    }

    sortNames = (name1, name2) => {
        const orders = [name1, name2].map((value) => Number.parseInt(value.match(this.ORDER_REGEX)[1]));
        return orders[0] - orders[1];
    }
}
