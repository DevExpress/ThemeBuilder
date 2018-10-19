import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DxGalleryComponent } from 'devextreme-angular';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
    widgetGroup = 'gallery';
    isExpanded = new Subject<boolean>();
    subscription: Subscription;

    @ViewChild('gallery') gallery: DxGalleryComponent;

    galleryItems: Array<string> = [
        'images/person1.png',
        'images/person2.png',
        'images/person3.png',
        'images/person4.png'
    ];

    collapsedOptions = {
        'showNavButtons': false,
    };

    expandedOptions = {
        'showNavButtons': true,
    };

    ngOnInit() {
        this.subscription = this.isExpanded.subscribe((expanded) => {
            this.gallery.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
