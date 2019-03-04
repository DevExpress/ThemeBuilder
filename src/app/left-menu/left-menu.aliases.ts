export class LeftMenuAlias {
    static aliases: any = {
        'base.common': { name: 'Basic Settings', order: 110 },
        'base.typography': { name: 'Typography Settings', order: 130 },

        'datagrid': {
            name: 'Data Grid / Tree List', order: 200,
            equivalents: 'dxDataGrid, data grid, dx-data-grid, dxTreeList, dx-tree-list'
        },
        'pivotgrid': {
            name: 'Pivot Grid', order: 400,
            equivalents: 'dxPivotGrid, dx-pivot-grid'
        },
        'scheduler': {
            name: 'Scheduler', order: 500,
            equivalents: 'dxScheduler, dx-scheduler'
        },
        'buttons': {
            name: 'Button', order: 700,
            equivalents: 'dxButton, dx-button'
        },
        'buttons.default': {
            name: 'Default Type', order: 710, widgetGroup: true,
            equivalents: 'dxButton, dx-button'
        },
        'buttons.normal': {
            name: 'Normal Type', order: 720, widgetGroup: true,
            equivalents: 'dxButton, dx-button'
        },
        'buttons.success': {
            name: 'Success Type', order: 730, widgetGroup: true,
            equivalents: 'dxButton, dx-button'
        },
        'buttons.danger': {
            name: 'Danger Type', order: 740, widgetGroup: true,
            equivalents: 'dxButton, dx-button'
        },
        'buttons.flat': {
            name: 'Flat Button', order: 750, widgetGroup: true,
            equivalents: 'dxButton, dx-button'
        },

        'editors': {
            name: 'Editors', order: 800,
            equivalents: 'TextBox, dxTextBox, dx-text-box'
        },
        'editors.texteditors': {
            name: 'Text Editors', order: 805, widgetGroup: true,
            equivalents: 'TextBox, dxTextBox, dx-text-box, dxTextArea, dx-text-area'
        },
        'editors.autocomplete': {
            name: 'Autocomplete', order: 810, widgetGroup: true,
            equivalents: 'SuggestBox, AutoSuggestBox, dxAutocomplete, dx-autocomplete'
        },
        'editors.calendar': {
            name: 'Calendar', order: 815, widgetGroup: true,
            equivalents: 'dxCalendar, dx-calendar'
        },
        'editors.checkbox': {
            name: 'Check Box', order: 820, widgetGroup: true,
            equivalents: 'Switch, CheckBox, dxCheckBox, dx-check-box'
        },
        'editors.colorbox': {
            name: 'Color Box', order: 825, widgetGroup: true,
            equivalents: 'ColorBox, ColorPicker, dxColorBox, dx-color-box'
        },
        'editors.lookup': {
            name: 'Lookup', order: 835, widgetGroup: true,
            equivalents: 'dxLookup, dx-lookup'
        },
        'editors.numberbox': {
            name: 'Number Box', order: 840, widgetGroup: true,
            equivalents: 'NumberBox, TextBox, dxNumberBox, dx-number-box'
        },
        'editors.radiogroup': {
            name: 'Radio Group', order: 845, widgetGroup: true,
            equivalents: 'RadioGroup, RadioButton, dxRadioGroup, dx-radio-group'
        },
        'editors.selectbox': {
            name: 'Select Box', order: 850, widgetGroup: true,
            equivalents: 'SelectBox, ComboBox, Spinner, dxSelectBox, dx-select-box, dxDropDownBox, dx-drop-down-box'
        },
        'editors.switch': {
            name: 'Switch', order: 855, widgetGroup: true,
            equivalents: 'Switch, CheckBox, dxSwitch, dx-switch'
        },
        'editors.tagbox': {
            name: 'Tag Box', order: 860, widgetGroup: true,
            equivalents: 'TagBox, SelectBox, ComboBox, MultiSelect, TagSelector, TokenBox, dxTagBox, dx-tag-box'
        },
        'editors.validation': {
            name: 'Validation', order: 870, widgetGroup: true,
            equivalents: 'dxValidator, dx-validator'
        },
        'editors.fileuploader': {
            name: 'File Uploader', order: 875, widgetGroup: true,
            equivalents: 'dxFileUploader, dx-file-uploader'
        },

        'form': {
            name: 'Form', order: 900,
            equivalents: 'dxForm, dx-form'
        },
        'filterbuilder': {
            name: 'Filter Builder', order: 950,
            equivalents: 'dxFilterBuilder, QueryBuilder'
        },
        'gallery': {
            name: 'Gallery', order: 1000,
            equivalents: 'dxGallery, dx-gallery'
        },

        'overlays': {
            name: 'Overlays', order: 1100,
            equivalents: ''
        },
        'overlays.common': {
            name: 'Overlays', order: 1110, widgetGroup: true,
            equivalents: 'dxPopup, dx-popup, dxPopover, dx-popover, dxActionSheet, dx-action-sheet, dxTooltip, dx-tooltip, dxToast, dx-toast'
        },
        'overlays.popup': {
            name: 'Popup', order: 1120, widgetGroup: true,
            equivalents: 'dxPopup, dx-popup'
        },
        'overlays.loadpanel': {
            name: 'Load Panel', order: 1130, widgetGroup: true,
            equivalents: 'dxLoadPanel, dx-load-panel'
        },
        'overlays.tooltip': {
            name: 'Tooltip', order: 1140, widgetGroup: true,
            equivalents: 'dxTooltip, dx-tooltip'
        },
        'overlays.toasts': {
            name: 'Toast', order: 1150, widgetGroup: true,
            equivalents: 'dxToast, dx-toast'
        },

        'list': {
            name: 'List', order: 1200,
            equivalents: 'ListView, TableView, ListBox, dxList, dx-list'
        },

        'navigations': {
            name: 'Navigation', order: 1400,
            equivalents: ''
        },
        'navigations.accordion': {
            name: 'Accordion', order: 1410,
            equivalents: 'dxAccordion, dx-accordion'
        },
        'navigations.menu': {
            name: 'Menu', order: 1420,
            equivalents: 'dxMenu, dx-menu'
        },
        'navigations.navbar': {
            name: 'Navbar', order: 1430,
            equivalents: 'NavigationBar, dxNavBar, dx-nav-bar'
        },
        'navigations.tabs': {
            name: 'Tabs', order: 1440,
            equivalents: 'TabBar, Segmented Control, dxTabs, dx-tabs'
        },
        'navigations.toolbar': {
            name: 'Toolbar', order: 1450,
            equivalents: 'ActionBar, AppBar, dx-toolbar, dxToolbar'
        },
        'navigations.treeview': {
            name: 'Tree View', order: 1460,
            equivalents: 'TreeView, TreeList, dxTreeView, dx-tree-view'
        },
        'navigations.drawer': {
            name: 'Drawer', order: 1470,
            equivalents: 'dxDrawer, dx-drawer, Slideout, Panel, Slideview, Layout'
        },

        'progressbars': {
            name: 'Progress Bar', order: 1500,
            equivalents: 'ProgressBar, dxProgressBar, dx-progress-bar'
        },
        'sliders': {
            name: 'Sliders', order: 1600,
            equivalents: 'SeekBar, TrackBar, dxSlider, dx-slider'
        },

        'scrollview': {
            name: 'Scroll View', order: 1700,
            equivalents: 'dxScrollView, dx-scroll-view'
        }
    };

    static getAlias(key) {
        return this.aliases[key];
    }
}

