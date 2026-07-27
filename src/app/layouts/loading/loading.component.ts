import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoadingService } from 'src/app/loading.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class LoadingComponent implements OnInit {
    loading = false;

    constructor(private loadingService: LoadingService) { }

    ngOnInit(): void {
        this.loadingService.busy.subscribe((busy) => this.loading = busy);
    }
}
