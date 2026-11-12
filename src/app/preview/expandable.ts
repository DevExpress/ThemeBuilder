import { EffectRef, Signal, WritableSignal, effect, untracked } from '@angular/core';

export interface ExpandableWidget {
    widgetGroup: string;
    isExpanded: WritableSignal<boolean>;
}

export function onExpandedChange(isExpanded: Signal<boolean>, callback: (expanded: boolean) => void): EffectRef {
    let initialized = false;

    return effect(() => {
        const expanded = isExpanded();

        if(!initialized) {
            initialized = true;
            return;
        }

        untracked(() => callback(expanded));
    });
}
