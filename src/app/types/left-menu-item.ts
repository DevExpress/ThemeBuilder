import { MetaItem } from './meta-item';

export class LeftMenuItem {
    order: number;
    groupKey: string;
    unitedGroupKey: string;
    groupName: string;
    equivalents: string;
    items: Array<MetaItem>;
}
