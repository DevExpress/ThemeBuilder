import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
    widgetGroup = 'accordion';
    isExpanded = new Subject<boolean>();

    accordionItems: any[] = [
        {
            title: 'Jack London (1876-1916)',
            icon: 'card',
            html: `<p>The Call of the Wild (1903)</p><p>Before Adam (1907)</p>
            <p>Burning Daylight (1910)</p><p>The Abysmal Brute (1911)</p>`
        }, {
            title: 'Mark Twain (1835-1910)',
            icon: 'card',
            html: `<p>Screamers (1871)</p><p>Eye Openers (1871)</p>
            <p>Colonel Sellers (1874)</p><p>Merry Tales (1892)</p>`
        }
    ];
}
