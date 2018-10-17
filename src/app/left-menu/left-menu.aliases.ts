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

        'buttons':              { name: 'Buttons', order: 700 },
        'buttons.default':      { name: 'Default Type', order: 710, widgetGroup: true },
        'buttons.normal':       { name: 'Normal Type', order: 720, widgetGroup: true },
        'buttons.success':      { name: 'Success Type', order: 730, widgetGroup: true },
        'buttons.danger':       { name: 'Danger Type', order: 740, widgetGroup: true },
        'buttons.flat':         { name: 'Flat Button', order: 750, widgetGroup: true },

        'editors':              { name: 'Editors', order: 800 },
        'editors.autocomplete': { name: 'Autocomplete', order: 810, widgetGroup: true  },
        'editors.calendar':     { name: 'Calendar', order: 815, widgetGroup: true  },
        'editors.checkbox':     { name: 'Check Box', order: 820, widgetGroup: true  },
        'editors.colorbox':     { name: 'Color Box', order: 825, widgetGroup: true  },
        'editors.fileuploader': { name: 'File Uploader', order: 830, widgetGroup: true  },
        'editors.lookup':       { name: 'Lookup', order: 835, widgetGroup: true  },
        'editors.numberbox':    { name: 'Number Box', order: 840, widgetGroup: true  },
        'editors.radiogroup':   { name: 'Radio Group', order: 845, widgetGroup: true  },
        'editors.selectbox':    { name: 'Select Box', order: 850, widgetGroup: true  },
        'editors.switch':       { name: 'Switch', order: 855, widgetGroup: true  },
        'editors.tagbox':       { name: 'Tag Box', order: 860, widgetGroup: true  },
        'editors.texteditors':  { name: 'Text Editors', order: 865, widgetGroup: true  },
        'editors.validation':   { name: 'Validation', order: 870, widgetGroup: true  },

        'form':                 { name: 'Form', order: 900 },
        'filterbuilder':        { name: 'Filter Builder', order: 950 },
        'gallery':              { name: 'Gallery', order: 1000 },

        'overlays':             { name: 'Overlays', order: 1100 },
        'overlays.common':      { name: 'Common', order: 1110, widgetGroup: true },
        'overlays.actionsheet': { name: 'Action Sheet', order: 1120, widgetGroup: true },
        'overlays.tooltip':     { name: 'Tooltip', order: 1130, widgetGroup: true },
        'overlays.toasts':      { name: 'Toast', order: 1140, widgetGroup: true },

        'list':                 { name: 'List', order: 1200 },

        'layouts':              { name: 'Layouts', order: 1300 },
        'layouts.desktop':      { name: 'Desktop', order: 1310, widgetGroup: true },
        'layouts.split':        { name: 'Split', order: 1320, widgetGroup: true },

        'navigations':          { name: 'Navigation', order: 1400 },
        'navigations.accordion': { name: 'Accordion', order: 1410 },
        'navigations.menu':     { name: 'Menu', order: 1420 },
        'navigations.navbar':   { name: 'Navbar', order: 1430 },
        'navigations.tabs':     { name: 'Tabs', order: 1440 },
        'navigations.toolbar':  { name: 'Toolbar', order: 1450 },
        'navigations.treeview': { name: 'Tree View', order: 1460 },

        'progressbars':         { name: 'Progress Bar', order: 1500 },
        'sliders':              { name: 'Sliders', order: 1600 },

        'scrollview':           { name: 'Scroll View', order: 1700 },
    };

    static getAlias(key) {
        return this.aliases[key];
    }
}

