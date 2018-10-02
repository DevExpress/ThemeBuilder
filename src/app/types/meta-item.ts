export class MetaItem {
    Name: string;
    Key: string;
    Group: string;
    Value: string;
    GroupHeader?: boolean;
    IsLastSubGroupItem?: boolean;
    Type?: string;
    TypeValues?: string;
    TypeValuesArray?: Array<string>;
    Items?: Array<MetaItem>;
}
