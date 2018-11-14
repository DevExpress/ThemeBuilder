import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevExtremeModule } from 'devextreme-angular';

import { ButtonsComponent } from './buttons/buttons.component';
import { DatatgridComponent } from './datatgrid/datatgrid.component';
import { EditorsComponent } from './editors/editors.component';
import { FilterbuilderComponent } from './filterbuilder/filterbuilder.component';
import { FormComponent } from './form/form.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ListComponent } from './list/list.component';
import { AccordionComponent } from './accordion/accordion.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { OverlaysComponent } from './overlays/overlays.component';
import { PivotgridComponent } from './pivotgrid/pivotgrid.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { ScrollviewComponent } from './scrollview/scrollview.component';
import { TreelistComponent } from './treelist/treelist.component';
import { SlidersComponent } from './sliders/sliders.component';

import { WizardComponent } from './wizard/wizard.component';
import { PreviewComponent } from './preview/preview.component';

import { ButtonDetailedComponent } from './button-detailed/button-detailed.component';

@NgModule({
    imports: [
        CommonModule,
        DevExtremeModule
    ],
    declarations: [
        DatatgridComponent,
        ButtonsComponent,
        EditorsComponent,
        FilterbuilderComponent,
        FormComponent,
        GalleryComponent,
        ListComponent,
        AccordionComponent,
        MenuComponent,
        NavbarComponent,
        TabsComponent,
        TreeviewComponent,
        OverlaysComponent,
        PivotgridComponent,
        ProgressbarComponent,
        SchedulerComponent,
        ScrollviewComponent,
        TreelistComponent,
        SlidersComponent,
        WizardComponent,
        PreviewComponent,
        ButtonDetailedComponent
    ],
    exports: [
        DatatgridComponent,
        ButtonsComponent,
        EditorsComponent,
        FilterbuilderComponent,
        FormComponent,
        GalleryComponent,
        ListComponent,
        AccordionComponent,
        MenuComponent,
        NavbarComponent,
        TabsComponent,
        TreeviewComponent,
        OverlaysComponent,
        PivotgridComponent,
        ProgressbarComponent,
        SchedulerComponent,
        ScrollviewComponent,
        TreelistComponent,
        SlidersComponent,
        WizardComponent,
        PreviewComponent,
        ButtonDetailedComponent
    ]
})
export class PreviewModule { }
