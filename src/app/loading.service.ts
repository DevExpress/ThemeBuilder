import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class LoadingService {
    busy = new BehaviorSubject<boolean>(false);
    stack = [];

    toggle(show: boolean): void {
        if(show) this.stack.push(true);
        else this.stack.pop();
        this.busy.next(!!this.stack.length);
    }

    show(): void {
        this.toggle(true);
    }

    hide(): void {
        this.toggle(false);
    }
}
