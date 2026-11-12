import { Component, inject } from '@angular/core';
import { LoadingService } from 'src/app/loading.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css'],
    standalone: false
})

export class LoadingComponent {
    readonly loading = inject(LoadingService).busy;
}
