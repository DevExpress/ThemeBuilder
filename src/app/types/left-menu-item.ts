import { MetaItem } from './meta-item';

export class LeftMenuItem {
    order: number;
    groupKey: string;
    groupName: string;
    equivalents: string;
    items: Array<MetaItem>;
}
