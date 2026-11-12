import { Injectable, signal } from '@angular/core';

@Injectable()

export class LoadingService {
    private readonly busyState = signal<boolean>(false);
    readonly busy = this.busyState.asReadonly();
    stack = [];

    toggle(show: boolean): void {
        if(show) this.stack.push(true);
        else this.stack.pop();
        this.busyState.set(!!this.stack.length);
    }

    show(): void {
        this.toggle(true);
    }

    hide(): void {
        this.toggle(false);
    }
}
