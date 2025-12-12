import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css'],
    standalone: false
})
export class GalleryComponent {
    widgetGroup = 'gallery';
    isExpanded = new Subject<boolean>();

    galleryItems: string[] = [
        'images/gallery1.jpg',
        'images/gallery2.jpg',
        'images/gallery3.jpg',
        'images/gallery4.jpg',
        'images/gallery5.jpg'
    ];
}
