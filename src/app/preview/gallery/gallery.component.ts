import { Component, ViewChild, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DxGalleryComponent } from 'devextreme-angular';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    widgetGroup = 'gallery';
    isExpanded = new Subject<boolean>();

    @ViewChild('gallery') gallery: DxGalleryComponent;

    galleryItems = [
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
        this.isExpanded.subscribe((expanded) => {
            this.gallery.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
        });
    }
}
