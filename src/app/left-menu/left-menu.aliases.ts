import { LeftMenuItem } from '../types/left-menu-item';

export class LeftMenuAlias {
    static menu: LeftMenuItem[] = [
        {
            name: 'Basic Settings',
            regs: [/^\$badge-/i, /^\$base-(?!(icon|label|link|spin|font|border-radius-small|border-radius-large|invalid))/i, /pager-/i],
            route: 'base.common'
        }, {
            name: 'Typography Settings',
            regs: [/^\$base-(icon|label|link|spin|font)/i],
            route: 'base.typography'
        }, {
            name: 'Data Grid / Tree List',
            equivalents: 'dxDataGrid, data grid, dx-data-grid, dxTreeList, dx-tree-list',
            regs: [/datagrid-/i],
            route: 'grids'
        }, {
            name: 'Pivot Grid',
            equivalents: 'dxPivotGrid, dx-pivot-grid',
            regs: [/pivotgrid[-_]/i],
            route: 'pivotgrid'
        }, {
            name: 'Scheduler',
            equivalents: 'dxScheduler, dx-scheduler',
            regs: [/scheduler[-_]/i],
            route: 'scheduler'
        }, {
            name: 'Button',
            equivalents: 'dxButton, dx-button',
            route: 'buttons',
            groups: [{
                name: 'Default Type',
                equivalents: 'dxButton, dx-button',
                regs: [/button-(group-)?default-/i]
            }, {
                name: 'Normal Type',
                equivalents: 'dxButton, dx-button',
                regs: [/button-(group-)?normal-/i]
            }, {
                name: 'Success Type',
                equivalents: 'dxButton, dx-button',
                regs: [/button-(group-)?success-/i]
            }, {
                name: 'Danger Type',
                equivalents: 'dxButton, dx-button',
                regs: [/button-(group-)?danger-/i]
            }]
        }, {
            name: 'Editors',
            equivalents: 'TextBox, dxTextBox, dx-text-box',
            route: 'editors',
            groups: [{
                name: 'Text Editors',
                equivalents: 'TextBox, dxTextBox, dx-text-box, dxTextArea, dx-text-area',
                regs: [/texteditor-|textbox-|dropdowneditor-/i, /base-border-radius-small/i]
            }, {
                name: 'Autocomplete',
                equivalents: 'SuggestBox, AutoSuggestBox, dxAutocomplete, dx-autocomplete'
            }, {
                name: 'Calendar',
                equivalents: 'dxCalendar, dx-calendar',
                regs: [/calendar-/i]
            }, {
                name: 'Check Box',
                equivalents: 'Switch, CheckBox, dxCheckBox, dx-check-box',
                regs: [/checkbox-/i]
            }, {
                name: 'Color Box',
                equivalents: 'ColorBox, ColorPicker, dxColorBox, dx-color-box',
                regs: [/colorbox-/i]
            }, {
                name: 'Lookup',
                equivalents: 'dxLookup, dx-lookup'
            }, {
                name: 'Number Box',
                equivalents: 'NumberBox, TextBox, dxNumberBox, dx-number-box',
                regs: [/numberbox-/i]
            }, {
                name: 'Radio Group',
                equivalents: 'RadioGroup, RadioButton, dxRadioGroup, dx-radio-group'
            }, {
                name: 'Select Box',
                equivalents: 'SelectBox, ComboBox, Spinner, dxSelectBox, dx-select-box, dxDropDownBox, dx-drop-down-box',
                regs: [/selectbox-/i]
            }, {
                name: 'Switch',
                equivalents: 'Switch, CheckBox, dxSwitch, dx-switch',
                regs: [/switch-/i]
            }, {
                name: 'Tag Box',
                equivalents: 'TagBox, SelectBox, ComboBox, MultiSelect, TagSelector, TokenBox, dxTagBox, dx-tag-box',
                regs: [/tagbox-/i]
            }, {
                name: 'Validation',
                equivalents: 'dxValidator, dx-validator',
                regs: [/^\$base-invalid/i]
            }, {
                name: 'File Uploader',
                equivalents: 'dxFileUploader, dx-file-uploader',
                regs: [/fileuploader-/i]
            }]
        }, {
            name: 'Form',
            equivalents: 'dxForm, dx-form',
            regs: [/form-/i],
            route: 'form'
        }, {
            name: 'Filter Builder',
            equivalents: 'dxFilterBuilder, QueryBuilder',
            regs: [/filterbuilder-/i],
            route: 'filterbuilder'
        }, {
            name: 'Gallery',
            equivalents: 'dxGallery, dx-gallery',
            regs: [/gallery-/i],
            route: 'gallery'
        }, {
            name: 'Overlays',
            equivalents: '',
            route: 'overlays',
            groups: [{
                name: 'Overlays',
                equivalents: 'dxPopup, dx-popup, dxPopover, dx-popover, dxActionSheet, dx-action-sheet, dxTooltip, dx-tooltip, dxToast, dx-toast',
                regs: [/overlay-content-bg/i, /overlay-shader-bg/i, /base-border-radius-large/i]
            }, {
                name: 'Popup',
                equivalents: 'dxPopup, dx-popup',
                regs: [/popup-/i, /overlay-focus-border-color/i]
            }, {
                name: 'Load Panel',
                equivalents: 'dxLoadPanel, dx-load-panel',
                regs: [/loadpanel-/i, /load-/i, /loadindicator-/i]
            }, {
                name: 'Tooltip',
                equivalents: 'dxTooltip, dx-tooltip',
                regs: [/tooltip-/i]
            }, {
                name: 'Toast',
                equivalents: 'dxToast, dx-toast',
                regs: [/toast-/i]
            }]
        }, {
            name: 'List',
            equivalents: 'ListView, TableView, ListBox, dxList, dx-list',
            regs: [/list-/i],
            route: 'list'
        }, {
            name: 'Chat',
            equivalents: 'Chat, dxChat, dx-chat',
            route: 'chat',
            groups: [{
                name: 'BASIC SETTINGS',
                equivalents: 'Chat, dxChat, dx-chat',
                regs: [/chat-background-color/i, /chat-border-color/i]
            }, {
                name: 'AVATAR',
                equivalents: 'Chat, dxChat, dx-chat',
                regs: [/chat-avatar-color/i, /chat-avatar-background-color/i]
            }, {
                name: 'MESSAGE BUBBLE',
                equivalents: 'Chat, dxChat, dx-chat',
                regs: [/chat-bubble-color-primary/i, /chat-bubble-background-color-primary/i, /chat-bubble-color-secondary/i, /chat-bubble-background-color-secondary/i, /chat-information-color/i]
            }, {
                name: 'SYSTEM INFO',
                equivalents: 'Chat, dxChat, dx-chat',
                regs: [/chat-information-author-name-color/i, /chat-information-timestamp-color/i, /chat-messagelist-day-header-color/i, /chat-alertlist-color/i]
            }, {
                name: 'EMPTY VIEW',
                equivalents: 'Chat, dxChat, dx-chat',
                regs: [/chat-messagelist-empty-icon-color/i, /chat-messagelist-empty-icon-background-color/i, /chat-messagelist-empty-message-color/i, /chat-messagelist-empty-prompt-color/i]
            }, {
                name: 'TYPING INDICATOR',
                equivalents: 'Chat, dxChat, dx-chat',
                regs: [/chat-typingindicator-color/i, /chat-typingindicator-bubble-bg-color/i, /chat-typingindicator-circle-bg-color-center/, /chat-typingindicator-circle-bg-color$/]
            }]
        }, {
            name: 'Splitter',
            equivalents: 'Splitter, dxSplitter, dx-splitter',
            regs: [/splitter-/i],
            route: 'splitter'
        }, {
            name: 'Accordion',
            equivalents: 'dxAccordion, dx-accordion',
            regs: [/accordion-/i],
            route: 'navigations.accordion'
        }, {
            name: 'Menu',
            equivalents: 'dxMenu, dx-menu',
            regs: [/menu/i],
            route: 'navigations.menu'
        }, {
            name: 'Tabs',
            equivalents: 'TabBar, Segmented Control, dxTabs, dx-tabs',
            regs: [/tabs-/i],
            route: 'navigations.tabs'
        }, {
            name: 'Toolbar',
            equivalents: 'ActionBar, AppBar, dx-toolbar, dxToolbar',
            regs: [/toolbar-/i],
            route: 'navigations.toolbar'
        }, {
            name: 'Tree View',
            equivalents: 'TreeView, TreeList, dxTreeView, dx-tree-view',
            regs: [/treeview-/i],
            route: 'navigations.treeview'
        }, {
            name: 'Drawer',
            equivalents: 'dxDrawer, dx-drawer, Panel, Layout',
            regs: [/drawer-/i],
            route: 'navigations.drawer'
        }, {
            name: 'Progress Bar',
            equivalents: 'ProgressBar, dxProgressBar, dx-progress-bar',
            regs: [/progressbar-/i],
            route: 'progressbars'
        }, {
            name: 'Sliders',
            equivalents: 'SeekBar, TrackBar, dxSlider, dx-slider',
            regs: [/material-slider-/i, /slider-/i],
            route: 'sliders'
        }, {
            name: 'Scroll View',
            equivalents: 'dxScrollView, dx-scroll-view',
            regs: [/scrollable-/i],
            route: 'scrollview'
        }, {
            name: 'FieldSet',
            equivalents: 'field set',
            regs: [/fieldset-/i],
            route: 'fieldset'
        }
    ];

    static getMenu(): LeftMenuItem[] {
        return this.menu;
    }
}
