import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PreviewService {

    constructor(private http: HttpClient) { }

    getPreviewWidgets(groupName) {
        return this.http.get('content/preview/' + groupName + '.group.json', { responseType: 'json' })
            .toPromise();
    }
}
