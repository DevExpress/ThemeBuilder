import { LeftMenuItem } from '../types/left-menu-item';

export class LeftMenuAlias {
    static menu: LeftMenuItem[] = [
        {
            name: 'Basic Settings',
            regs: [ /badge-/, /base-(?!(icon|label|link|spin|font|border-radius-small|border-radius-large))/, /pager-/ ],
            route: 'base.common'
        }, {
            name: 'Typography Settings',
            regs: [ /base-(icon|label|link|spin|font)/ ],
            route: 'base.typography'
        }, {
            name: 'Data Grid / Tree List',
            equivalents: 'dxDataGrid, data grid, dx-data-grid, dxTreeList, dx-tree-list',
            regs: [ /datagrid-/ ],
            route: 'grids'
        }, {
            name: 'Pivot Grid',
            equivalents: 'dxPivotGrid, dx-pivot-grid',
            regs: [ /PIVOTGRID[-_]/i ],
            route: 'pivotgrid'
        }, {
            name: 'Scheduler',
            equivalents: 'dxScheduler, dx-scheduler',
            regs: [ /SCHEDULER[-_]/i ],
            route: 'scheduler'
        }, {
            name: 'Button',
            equivalents: 'dxButton, dx-button',
            route: 'buttons',
            groups: [{
                name: 'Default Type',
                equivalents: 'dxButton, dx-button',
                regs: [ /button-default-/ ]
            }, {
                name: 'Normal Type',
                equivalents: 'dxButton, dx-button',
                regs: [ /button-normal-/ ]
            }, {
                name: 'Success Type',
                equivalents: 'dxButton, dx-button',
                regs: [ /button-success-/ ]
            }, {
                name: 'Danger Type',
                equivalents: 'dxButton, dx-button',
                regs: [ /button-danger-/ ]
            }, {
                name: 'Flat Button',
                equivalents: 'dxButton, dx-button',
                regs: [ /button-flat-/ ]
            }]
        }, {
            name: 'Editors',
            equivalents: 'TextBox, dxTextBox, dx-text-box',
            route: 'editors',
            groups: [{
                name: 'Text Editors',
                equivalents: 'TextBox, dxTextBox, dx-text-box, dxTextArea, dx-text-area',
                regs: [ /texteditor-|textbox-|dropdowneditor-/, /base-border-radius-small/ ]
            }, {
                name: 'Autocomplete',
                equivalents: 'SuggestBox, AutoSuggestBox, dxAutocomplete, dx-autocomplete'
            }, {
                name: 'Calendar',
                equivalents: 'dxCalendar, dx-calendar',
                regs: [ /calendar-/ ]
            }, {
                name: 'Check Box',
                equivalents: 'Switch, CheckBox, dxCheckBox, dx-check-box',
                regs: [ /switch-/ ]
            }, {
                name: 'Color Box',
                equivalents: 'ColorBox, ColorPicker, dxColorBox, dx-color-box',
                regs: [ /colorbox-/ ]
            }, {
                name: 'Lookup',
                equivalents: 'dxLookup, dx-lookup'
            }, {
                name: 'Number Box',
                equivalents: 'NumberBox, TextBox, dxNumberBox, dx-number-box',
                regs: [ /numberbox-/ ]
            }, {
                name: 'Radio Group',
                equivalents: 'RadioGroup, RadioButton, dxRadioGroup, dx-radio-group'
            }, {
                name: 'Select Box',
                equivalents: 'SelectBox, ComboBox, Spinner, dxSelectBox, dx-select-box, dxDropDownBox, dx-drop-down-box',
                regs: [ /selectbox-/ ]
            }, {
                name: 'Switch',
                equivalents: 'Switch, CheckBox, dxSwitch, dx-switch',
                regs: [ /switch-/ ]
            }, {
                name: 'Tag Box',
                equivalents: 'TagBox, SelectBox, ComboBox, MultiSelect, TagSelector, TokenBox, dxTagBox, dx-tag-box',
                regs: [ /tagbox-/ ]
            }, {
                name: 'Validation',
                equivalents: 'dxValidator, dx-validator'
            }, {
                name: 'File Uploader',
                equivalents: 'dxFileUploader, dx-file-uploader',
                regs: [ /fileuploader-/ ]
            }]
        }, {
            name: 'Form',
            equivalents: 'dxForm, dx-form',
            regs: [ /form-/ ],
            route: 'form'
        }, {
            name: 'Filter Builder',
            equivalents: 'dxFilterBuilder, QueryBuilder',
            regs: [ /filterbuilder-/ ],
            route: 'filterbuilder'
        }, {
            name: 'Gallery',
            equivalents: 'dxGallery, dx-gallery',
            regs: [ /gallery-/ ],
            route: 'gallery'
        }, {
            name: 'Overlays',
            equivalents: '',
            route: 'overlays',
            groups: [{
                name: 'Overlays',
                equivalents: 'dxPopup, dx-popup, dxPopover, dx-popover, dxActionSheet, dx-action-sheet, dxTooltip, dx-tooltip, dxToast, dx-toast',
                regs: [ /overlay-content-bg/, /overlay-shader-bg/, /base-border-radius-large/ ]
            }, {
                name: 'Popup',
                equivalents: 'dxPopup, dx-popup',
                regs: [ /popup-/, /overlay-focus-border-color/ ]
            }, {
                name: 'Load Panel',
                equivalents: 'dxLoadPanel, dx-load-panel',
                regs: [ /loadpanel-/, /load-/, /loadindicator-/ ]
            }, {
                name: 'Tooltip',
                equivalents: 'dxTooltip, dx-tooltip',
                regs: [ /tooltip-/ ]
            }, {
                name: 'Toast',
                equivalents: 'dxToast, dx-toast',
                regs: [ /toast-/ ]
            }]
        }, {
            name: 'List',
            equivalents: 'ListView, TableView, ListBox, dxList, dx-list',
            regs: [ /list-/ ],
            route: 'list'
        }, {
            name: 'Accordion',
            equivalents: 'dxAccordion, dx-accordion',
            regs: [ /accordion-/ ],
            route: 'navigations.accordion'
        }, {
            name: 'Menu',
            equivalents: 'dxMenu, dx-menu',
            regs: [ /menu/ ],
            route: 'navigations.menu'
        },  {
            name: 'Navbar',
            equivalents: 'NavigationBar, dxNavBar, dx-nav-bar',
            regs: [ /navbar-/ ],
            route: 'navigations.navbar'
        }, {
            name: 'Tabs',
            equivalents: 'TabBar, Segmented Control, dxTabs, dx-tabs',
            regs: [ /tabs-/ ],
            route: 'navigations.tabs'
        }, {
            name: 'Toolbar',
            equivalents: 'ActionBar, AppBar, dx-toolbar, dxToolbar',
            regs: [ /toolbar-/ ],
            route: 'navigations.toolbar'
        }, {
            name: 'Tree View',
            equivalents: 'TreeView, TreeList, dxTreeView, dx-tree-view',
            regs: [ /treeview-/ ],
            route: 'navigations.treeview'
        }, {
            name: 'Drawer',
            equivalents: 'dxDrawer, dx-drawer, Slideout, Panel, Slideview, Layout',
            regs: [ /drawer-/ ],
            route: 'navigations.drawer'
        }, {
            name: 'Progress Bar',
            equivalents: 'ProgressBar, dxProgressBar, dx-progress-bar',
            regs: [ /progressbar-/ ],
            route: 'progressbars'
        }, {
            name: 'Sliders',
            equivalents: 'SeekBar, TrackBar, dxSlider, dx-slider',
            regs: [ /material-slider-/, /slider-/ ],
            route: 'sliders'
        }, {
            name: 'Scroll View',
            equivalents: 'dxScrollView, dx-scroll-view',
            regs: [ /scrollable-/ ],
            route: 'scrollview'
        }
    ];

    static getMenu(): LeftMenuItem[] {
        return this.menu;
    }
}
