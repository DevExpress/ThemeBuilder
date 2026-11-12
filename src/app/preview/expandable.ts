import { AfterRenderRef, Signal, WritableSignal, afterRenderEffect, untracked } from '@angular/core';

export interface ExpandableWidget {
    widgetGroup: string;
    isExpanded: WritableSignal<boolean>;
}

/**
 * Applies the expanded state after render: once initially (view children are resolved by then),
 * so collapsed options are applied on startup, and again on every change.
 */
export function onExpandedChange(isExpanded: Signal<boolean>, callback: (expanded: boolean) => void): AfterRenderRef {
    return afterRenderEffect(() => {
        const expanded = isExpanded();
        untracked(() => callback(expanded));
    });
}
