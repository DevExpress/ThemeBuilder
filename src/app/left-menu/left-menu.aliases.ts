export class LeftMenuAlias {
    static aliases: any = {
        'basetheming':          { name: 'Base Theming', order: 0 },

        'advtheming':           { name: 'Advanced Theming', order: 1 },

        'base':                 { name: 'Common', order: 100 },
        'base.common':          { name: 'Basic Settings', order: 110 },
        'base.widgetstates':    { name: 'Widget States', order: 120 },
        'base.typography':      { name: 'Typography Settings', order: 130 },

        'datagrid':             { name: 'Data Grid', order: 200, equivalents: 'dxDataGrid, data grid, dx-data-grid' },
        'treelist':             { name: 'Tree List', order: 300, equivalents: 'dxTreeList, dx-tree-list' },
        'pivotgrid':            { name: 'Pivot Grid', order: 400, equivalents: 'dxPivotGrid, dx-pivot-grid' },
        'scheduler':            { name: 'Scheduler', order: 500, equivalents: 'dxScheduler, dx-scheduler' },

        'badges':               { name: 'Badges', order: 600, equivalents: '' },

        'buttons':              { name: 'Button', order: 700, equivalents: 'dxButton, dx-button' },
        'buttons.default':      { name: 'Default Type', order: 710, widgetGroup: true, equivalents: 'dxButton, dx-button' },
        'buttons.normal':       { name: 'Normal Type', order: 720, widgetGroup: true, equivalents: 'dxButton, dx-button' },
        'buttons.success':      { name: 'Success Type', order: 730, widgetGroup: true, equivalents: 'dxButton, dx-button' },
        'buttons.danger':       { name: 'Danger Type', order: 740, widgetGroup: true, equivalents: 'dxButton, dx-button' },
        'buttons.flat':         { name: 'Flat Button', order: 750, widgetGroup: true, equivalents: 'dxButton, dx-button' },

        'editors':              { name: 'Editors', order: 800, equivalents: 'TextBox, dxTextBox, dx-text-box' },
        'editors.autocomplete': { name: 'Autocomplete', order: 810, equivalents: 'SuggestBox, AutoSuggestBox, dxAutocomplete, dx-autocomplete' },
        'editors.calendar':     { name: 'Calendar', order: 815, equivalents: 'dxCalendar, dx-calendar' },
        'editors.checkbox':     { name: 'Check Box', order: 820, equivalents: 'Switch, CheckBox, dxCheckBox, dx-check-box' },
        'editors.colorbox':     { name: 'Color Box', order: 825, equivalents: 'ColorBox, ColorPicker, dxColorBox, dx-color-box' },
        'editors.fileuploader': { name: 'File Uploader', order: 830, equivalents: 'dxFileUploader, dx-file-uploader' },
        'editors.lookup':       { name: 'Lookup', order: 835, equivalents: 'dxLookup, dx-lookup' },
        'editors.numberbox':    { name: 'Number Box', order: 840, equivalents: 'NumberBox, TextBox, dxNumberBox, dx-number-box' },
        'editors.radiogroup':   { name: 'Radio Group', order: 845, equivalents: 'RadioGroup, RadioButton, dxRadioGroup, dx-radio-group' },
        'editors.selectbox':    { name: 'Select Box', order: 850, equivalents: 'SelectBox, ComboBox, Spinner, dxSelectBox, dx-select-box' },
        'editors.switch':       { name: 'Switch', order: 855, equivalents: 'Switch, CheckBox, dxSwitch, dx-switch' },
        'editors.tagbox':       { name: 'Tag Box', order: 860, equivalents: 'TagBox, SelectBox, ComboBox, MultiSelect, TagSelector, TokenBox, dxTagBox, dx-tag-box' },
        'editors.texteditors':  { name: 'Text Editors', order: 865, equivalents: 'TextBox, dxTextBox, dx-text-box' },
        'editors.validation':   { name: 'Validation', order: 870, equivalents: 'dxValidator, dx-validator' },

        'form':                 { name: 'Form', order: 900, equivalents: 'dxForm, dx-form' },
        'filterbuilder':        { name: 'Filter Builder', order: 950, equivalents: 'dxFilterBuilder, QueryBuilder' },
        'gallery':              { name: 'Gallery', order: 1000, equivalents: 'dxGallery, dx-gallery' },

        'overlays':             { name: 'Overlays', order: 1100, equivalents: '' },
        'overlays.common':      { name: 'Overlays', order: 1110, equivalents: '' },
        'overlays.actionsheet': { name: 'Action Sheet', order: 1120, equivalents: 'dxActionSheet, dx-action-sheet' },
        'overlays.tooltip':     { name: 'Tooltip', order: 1130, equivalents: 'dxTooltip, dx-tooltip' },
        'overlays.toasts':      { name: 'Toast', order: 1140, equivalents: 'dxToast, dx-toast' },

        'list':                 { name: 'List', order: 1200, equivalents: 'ListView, TableView, ListBox, dxList, dx-list' },

        'layouts':              { name: 'Layouts', order: 1300, equivalents: '' },
        'layouts.desktop':      { name: 'Desktop', order: 1310, widgetGroup: true, equivalents: '' },
        'layouts.split':        { name: 'Split', order: 1320, widgetGroup: true, equivalents: '' },

        'navigations':          { name: 'Navigation', order: 1400, equivalents: '' },
        'navigations.accordion': { name: 'Accordion', order: 1410, equivalents: 'dxAccordion, dx-accordion' },
        'navigations.menu':     { name: 'Menu', order: 1420, equivalents: 'dxMenu, dx-menu' },
        'navigations.navbar':   { name: 'Navbar', order: 1430, equivalents: 'NavigationBar, dxNavBar, dx-nav-bar' },
        'navigations.tabs':     { name: 'Tabs', order: 1440, equivalents: 'TabBar, Segmented Control, dxTabs, dx-tabs' },
        'navigations.toolbar':  { name: 'Toolbar', order: 1450, equivalents: 'ActionBar, AppBar, dx-toolbar, dxToolbar' },
        'navigations.treeview': { name: 'Tree View', order: 1460, equivalents: 'TreeView, TreeList, dxTreeView, dx-tree-view' },

        'progressbars':         { name: 'Progress Bar', order: 1500, equivalents: 'ProgressBar, dxProgressBar, dx-progress-bar' },

        'scrollview':           { name: 'Scroll View', order: 1600, equivalents: 'dxScrollView, dx-scroll-view' },
        'sliders':              { name: 'Sliders', order: 1700, equivalents: 'SeekBar, TrackBar, dxSlider, dx-slider' },
        'tileview':             { name: 'Tile View', order: 1800, equivalents: 'dxTileView, dx-tile-view' }
    };

    static getAlias(key) {
        return this.aliases[key];
    }
}

