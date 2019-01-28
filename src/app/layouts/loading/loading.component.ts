import { Component, OnInit, Input } from '@angular/core';
import { MetadataRepositoryService } from '../../meta-repository.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})

export class LoadingComponent implements OnInit {
    @Input() target;
    loading = false;

    constructor(private metadataService: MetadataRepositoryService) { }

    ngOnInit() {
        this.metadataService.busy.subscribe(busy => this.loading = busy);
        // this.loading = true;
    }
}
