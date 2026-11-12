import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { LoadingService } from 'src/app/loading.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class LoadingComponent {
    readonly loading = inject(LoadingService).busy;
}
