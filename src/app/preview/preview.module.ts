import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DevExtremeModule } from 'devextreme-angular';

import { AccordionComponent } from './accordion/accordion.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { ChatComponent } from './chat/chat.component';
import { DatagridComponent } from './datatgrid/datatgrid.component';
import { DrawerComponent } from './drawer/drawer.component';
import { EditorsComponent } from './editors/editors.component';
import { FilterbuilderComponent } from './filterbuilder/filterbuilder.component';
import { FieldSetComponent } from './fieldset/fieldset.component';
import { FormComponent } from './form/form.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { OverlaysComponent } from './overlays/overlays.component';
import { PivotgridComponent } from './pivotgrid/pivotgrid.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ScrollviewComponent } from './scrollview/scrollview.component';
import { SplitterComponent } from './splitter/splitter.component';
import { SlidersComponent } from './sliders/sliders.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TreelistComponent } from './treelist/treelist.component';
import { TreeviewComponent } from './treeview/treeview.component';

import { PreviewComponent } from './preview/preview.component';
import { WizardComponent } from './wizard/wizard.component';

import { ButtonDetailedComponent } from './button-detailed/button-detailed.component';

@NgModule({
    imports: [
        CommonModule,
        DevExtremeModule
    ],
    declarations: [
        DatagridComponent,
        ButtonsComponent,
        ButtonGroupComponent,
        ChatComponent,
        EditorsComponent,
        FilterbuilderComponent,
        FieldSetComponent,
        FormComponent,
        GalleryComponent,
        ListComponent,
        AccordionComponent,
        MenuComponent,
        TabsComponent,
        TreeviewComponent,
        OverlaysComponent,
        PivotgridComponent,
        ProgressbarComponent,
        SchedulerComponent,
        ScrollviewComponent,
        SplitterComponent,
        TreelistComponent,
        SlidersComponent,
        WizardComponent,
        PreviewComponent,
        ToolbarComponent,
        DrawerComponent,
        ButtonDetailedComponent
    ],
    exports: [
        DatagridComponent,
        ButtonsComponent,
        ButtonGroupComponent,
        ChatComponent,
        EditorsComponent,
        FilterbuilderComponent,
        FieldSetComponent,
        FormComponent,
        GalleryComponent,
        ListComponent,
        AccordionComponent,
        MenuComponent,
        TabsComponent,
        TreeviewComponent,
        OverlaysComponent,
        PivotgridComponent,
        ProgressbarComponent,
        SchedulerComponent,
        ScrollviewComponent,
        SplitterComponent,
        TreelistComponent,
        SlidersComponent,
        WizardComponent,
        PreviewComponent,
        ButtonDetailedComponent
    ]
})
export class PreviewModule { }
