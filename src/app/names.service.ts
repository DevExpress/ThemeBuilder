import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable()
export class NamesService {

    constructor(private sanitizer: DomSanitizer) { }

    private ORDER_REGEX = /^(\d+).\s/;

    getRealName(orderedName): string {
        return orderedName.replace(this.ORDER_REGEX, '');
    }

    getHighlightedForLeftMenuName(orderedName, searchText): SafeHtml {
        const text = this.getRealName(orderedName);
        if(!searchText) return text;

        const highlightedText = text.replace(new RegExp(`(${searchText})`, 'ig'), '<span style="color:#f05b41">$1</span>');

        return this.sanitizer.bypassSecurityTrustHtml(highlightedText);
    }

    sortNames(name1, name2): number {
        const redix = 10;
        return Number.parseInt(name1, redix) - Number.parseInt(name2, redix);
    }
}
