export class LeftMenuAlias {
    static aliases: any = {
        'basetheming':          { name: 'Base Theming', order: 0 },

        'advtheming':           { name: 'Advanced Theming', order: 1 },

        'base':                 { name: 'Common', order: 100 },
        'base.common':          { name: 'Basic Settings', order: 110 },
        'base.widgetstates':    { name: 'Widget States', order: 120 },
        'base.typography':      { name: 'Typography Settings', order: 130 },

        'datagrid':             { name: 'Data Grid', order: 200 },
        'treelist':             { name: 'Tree List', order: 300 },
        'pivotgrid':            { name: 'Pivot Grid', order: 400 },
        'scheduler':            { name: 'Scheduler', order: 500 },

        'badges':               { name: 'Badges', order: 600 },

        'buttons':              { name: 'Button', order: 700 },
        'buttons.default':      { name: 'Default Type', order: 710, widgetGroup: true },
        'buttons.normal':       { name: 'Normal Type', order: 720, widgetGroup: true },
        'buttons.success':      { name: 'Success Type', order: 730, widgetGroup: true },
        'buttons.danger':       { name: 'Danger Type', order: 740, widgetGroup: true },
        'buttons.flat':         { name: 'Flat Button', order: 750, widgetGroup: true },

        'editors':              { name: 'Editors', order: 800 },
        'editors.autocomplete': { name: 'Autocomplete', order: 810 },
        'editors.calendar':     { name: 'Calendar', order: 815 },
        'editors.checkbox':     { name: 'Check Box', order: 820 },
        'editors.colorbox':     { name: 'Color Box', order: 825 },
        'editors.fileuploader': { name: 'File Uploader', order: 830 },
        'editors.lookup':       { name: 'Lookup', order: 835 },
        'editors.numberbox':    { name: 'Number Box', order: 840 },
        'editors.radiogroup':   { name: 'Radio Group', order: 845 },
        'editors.selectbox':    { name: 'Select Box', order: 850 },
        'editors.switch':       { name: 'Switch', order: 855 },
        'editors.tagbox':       { name: 'Tag Box', order: 860 },
        'editors.texteditors':  { name: 'Text Editors', order: 865 },
        'editors.validation':   { name: 'Validation', order: 870 },

        'form':                 { name: 'Form', order: 900 },
        'filterbuilder':        { name: 'Filter Builder', order: 950 },
        'gallery':              { name: 'Gallery', order: 1000 },

        'overlays':             { name: 'Overlays', order: 1100 },
        'overlays.common':      { name: 'Overlays', order: 1110 },
        'overlays.actionsheet': { name: 'Action Sheet', order: 1120 },
        'overlays.tooltip':     { name: 'Tooltip', order: 1130 },
        'overlays.toasts':      { name: 'Toast', order: 1140 },

        'list':                 { name: 'List', order: 1200 },

        'layouts':              { name: 'Layouts', order: 1300 },
        'layouts.desktop':      { name: 'Desktop', order: 1310 },
        'layouts.split':        { name: 'Split', order: 1320 },

        'navigations':          { name: 'Navigation', order: 1400 },
        'navigations.accordion': { name: 'Accordion', order: 1410 },
        'navigations.menu':     { name: 'Menu', order: 1420 },
        'navigations.navbar':   { name: 'Navbar', order: 1430 },
        'navigations.tabs':     { name: 'Tabs', order: 1440 },
        'navigations.toolbar':  { name: 'Toolbar', order: 1450 },
        'navigations.treeview': { name: 'Tree View', order: 1460 },

        'progressbars':         { name: 'Progress Bar', order: 1500 },

        'scrollview':           { name: 'Scroll View', order: 1600 },
        'sliders':              { name: 'Sliders', order: 1700 },
        'tileview':             { name: 'Tile View', order: 1800 }
    };

    static getAlias(key) {
        return this.aliases[key];
    }
}

export class MetaItem {
    Name: string;
    Key: string;
    Group: string;
    Value: string;
    Separator: boolean;
}

export class LeftMenuItem {
    order: number;
    groupKey: string;
    groupName: string;
    items: Array<MetaItem>;
}
