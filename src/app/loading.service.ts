import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

export class LoadingService {
    busy = new BehaviorSubject<boolean>(false);
    stack = [];

    toggle(show: boolean) {
        show ? this.stack.push(true) : this.stack.pop();
        this.busy.next(!!this.stack.length);
    }

    show() {
        this.toggle(true);
    }

    hide() {
        this.toggle(false);
    }
}
