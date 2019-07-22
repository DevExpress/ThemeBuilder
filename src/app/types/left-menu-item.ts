import { MetaItem } from './meta-item';

export class LeftMenuItem {
    name: string;
    regs?: RegExp[];
    equivalents?: string;
    groups?: LeftMenuItem[];
    items?: MetaItem[];
    route?: string;
}
