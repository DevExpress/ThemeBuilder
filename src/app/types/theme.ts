export class Theme {
    name: string;
    colorScheme: string;
}

export class ThemeConfig extends Theme {
    themeId: number;
    text: string;
    group: string;
}
