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
            name: 'Card View',
            isNew: true,
            equivalents: 'dxCardView, card view, dx-card-view, dxCardView, dx-card-view',
            route: 'cardview',
            groups: [{
                name: 'Common Settings',
                equivalents: 'dxCardView, card view, dx-card-view, dxCardView, dx-card-view',
                regs: [
                    /cardview-fluent-common/i,
                    /cardview-generic-common/i,
                    /cardview-material-common/i
                ]
            }, {
                name: 'Card',
                equivalents: 'dxCardView, card view, dx-card-view, dxCardView, dx-card-view',
                regs: [
                    /cardview-fluent-card(?!--)(?!.*--highlighted)/i,
                    /cardview-generic-card(?!--)(?!.*--highlighted)/i,
                    /cardview-material-card(?!--)(?!.*--highlighted)/i
                ]
            }, {
                name: 'Card (Selected)',
                equivalents: 'dxCardView, card view, dx-card-view, dxCardView, dx-card-view',
                regs: [
                    /cardview-fluent-card--selected/i,
                    /cardview-generic-card--selected/i,
                    /cardview-material-card--selected/i
                ]
            }, {
                name: 'Header Item',
                equivalents: 'dxCardView, card view, dx-card-view, dxCardView, dx-card-view',
                regs: [
                    /cardview-fluent-header-panel__item(?!--)/i,
                    /cardview-generic-header-panel__item(?!--)/i,
                    /cardview-material-header-panel__item(?!--)/i
                ]
            }, {
                name: 'Header Item (Hovered)',
                equivalents: 'dxCardView, card view, dx-card-view, dxCardView, dx-card-view',
                regs: [
                    /cardview-fluent-header-panel__item--hovered/i,
                    /cardview-generic-header-panel__item--hovered/i,
                    /cardview-material-header-panel__item--hovered/i
                ]
            }, {
                name: 'Header Item (Drag Ghost)',
                equivalents: 'dxCardView, card view, dx-card-view, dxCardView, dx-card-view',
                regs: [
                    /cardview-fluent-header-panel__item--disabled/i,
                    /cardview-generic-header-panel__item--disabled/i,
                    /cardview-material-header-panel__item--disabled/i
                ]
            }, {
                name: 'Header Item (Drag Active)',
                equivalents: 'dxCardView, card view, dx-card-view, dxCardView, dx-card-view',
                regs: [
                    /cardview-fluent-header-panel__item--dragged/i,
                    /cardview-generic-header-panel__item--dragged/i,
                    /cardview-material-header-panel__item--dragged/i
                ]
            }, {
                name: 'Header Drop Zone',
                equivalents: 'dxCardView, card view, dx-card-view, dxCardView, dx-card-view',
                regs: [
                    /cardview-fluent-header-panel__dropzone/i,
                    /cardview-generic-header-panel__dropzone/i,
                    /cardview-material-header-panel__dropzone/i
                ]
            }, {
                name: 'Filter Panel',
                equivalents: 'dxCardView, card view, dx-card-view, dxCardView, dx-card-view',
                regs: [
                    /cardview-fluent-filter-panel/i,
                    /cardview-generic-filter-panel/i,
                    /cardview-material-filter-panel/i
                ]
            }, {
                name: 'Empty View',
                equivalents: 'dxCardView, card view, dx-card-view, dxCardView, dx-card-view',
                regs: [
                    /cardview-fluent-nodata-view/i,
                    /cardview-generic-nodata-view/i,
                    /cardview-material-nodata-view/i
                ]
            }, {
                name: 'Highlights In Search',
                equivalents: 'dxCardView, card view, dx-card-view, dxCardView, dx-card-view',
                regs: [
                    /cardview-fluent-card__content__field-value--highlighted/i,
                    /cardview-generic-card__content__field-value--highlighted/i,
                    /cardview-material-card__content__field-value--highlighted/i
                ]
            }]
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
                name: 'Basic Settings',
                equivalents: 'Chat, dxChat, dx-chat',
                regs: [/chat-background-color/i, /chat-border-color/i]
            }, {
                name: 'Avatar',
                equivalents: 'Chat, dxChat, dx-chat',
                regs: [/chat-avatar-color/i, /chat-avatar-background-color/i]
            }, {
                name: 'Message bubble',
                equivalents: 'Chat, dxChat, dx-chat',
                regs: [/chat-bubble-color-primary/i, /chat-bubble-background-color-primary/i, /chat-bubble-color-secondary/i, /chat-bubble-background-color-secondary/i, /chat-information-color/i]
            }, {
                name: 'System Info',
                equivalents: 'Chat, dxChat, dx-chat',
                regs: [/chat-information-author-name-color/i, /chat-information-timestamp-color/i, /chat-messagelist-day-header-color/i, /chat-alertlist-color/i]
            }, {
                name: 'Empty View',
                equivalents: 'Chat, dxChat, dx-chat',
                regs: [/chat-messagelist-empty-icon-color/i, /chat-messagelist-empty-icon-background-color/i, /chat-messagelist-empty-message-color/i, /chat-messagelist-empty-prompt-color/i]
            }, {
                name: 'Typing Indicator',
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
            name: 'Stepper',
            isNew: true,
            equivalents: 'Stepper, dxStepper, dx-stepper',
            route: 'stepper',
            groups: [{
                name: 'Common Settings',
                equivalents: 'Stepper, dxStepper, dx-stepper',
                regs: [/stepper-step-accent-/i, /stepper-step-danger-/i, /stepper-step-invalid-label-color/i, /stepper-step-shadow-/i]
            }, {
                name: 'Pending Step',
                equivalents: 'Stepper, dxStepper, dx-stepper',
                regs: [/stepper-step-base-/i]
            }, {
                name: 'Completed Step',
                equivalents: 'Stepper, dxStepper, dx-stepper',
                regs: [/stepper-step-selected-/i]
            }, {
                name: 'Pending Invalid Step',
                equivalents: 'Stepper, dxStepper, dx-stepper',
                regs: [/stepper-step-invalid-(?!selected-|label-color)/i]
            }, {
                name: 'Completed Invalid Step',
                equivalents: 'Stepper, dxStepper, dx-stepper',
                regs: [/stepper-step-invalid-selected-/i]
            }, {
                name: 'Disabled Step',
                equivalents: 'Stepper, dxStepper, dx-stepper',
                regs: [/stepper-step-disabled-/i]
            }, {
                name: 'Connector',
                equivalents: 'Stepper, dxStepper, dx-stepper',
                regs: [/stepper-connector-/i]
            }]
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
