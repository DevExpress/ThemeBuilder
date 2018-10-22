import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import {
    DxButtonModule,
    DxTabPanelModule,
    DxFileUploaderModule,
    DxTextBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxColorBoxModule,
    DxDataGridModule,
    DxScrollViewModule
} from 'devextreme-angular';

import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { PreviewLayoutComponent } from './layouts/preview-layout/preview-layout.component';
import { AdvancedLayoutComponent } from './layouts/advanced-layout/advanced-layout.component';
import { HeaderComponent } from './layouts/header/header.component';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MasterComponent } from './master/master.component';
import { ImportBootstrapComponent } from './import-bootstrap/import-bootstrap.component';
import { IconThemesComponent } from './icons/icon-themes/icon-themes.component';
import { IconGenericComponent } from './icons/icon-generic/icon-generic.component';
import { IconMaterialComponent } from './icons/icon-material/icon-material.component';
import { IconMetadataComponent } from './icons/icon-metadata/icon-metadata.component';
import { IconExportComponent } from './icons/icon-export/icon-export.component';
import { IconBootstrapComponent } from './icons/icon-bootstrap/icon-bootstrap.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { LeftMenuComponent } from './left-menu/main/left-menu.component';
import { EditorComponent } from './left-menu/editor/editor.component';
import { BaseParametersComponent } from './left-menu/base-parameters/base-parameters.component';
import { IframeComponent } from './iframe/iframe.component';
import { PreviewComponent } from './preview/preview.component';
import { SearchOpenerComponent } from './left-menu/search-opener/search-opener.component';
import { BackNavigatorComponent } from './left-menu/back-navigator/back-navigator.component';
import { IconThemeCircleComponent } from './icons/icon-theme-circle/icon-theme-circle.component';

import { BuilderService } from './builder.service';
import { MetadataRepositoryService } from './meta-repository.service';
import { NamesService } from './names.service';

import { PreviewModule } from './preview/preview.module';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        MasterComponent,
        ImportBootstrapComponent,
        IconThemesComponent,
        IconGenericComponent,
        IconMaterialComponent,
        IconMetadataComponent,
        IconExportComponent,
        IconBootstrapComponent,
        AdvancedComponent,
        LeftMenuComponent,
        EditorComponent,
        BaseParametersComponent,
        AppLayoutComponent,
        PreviewLayoutComponent,
        IframeComponent,
        PreviewComponent,
        AdvancedLayoutComponent,
        HeaderComponent,
        SearchOpenerComponent,
        BackNavigatorComponent,
        IconThemeCircleComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DxTabPanelModule,
        DxFileUploaderModule,
        DxTextBoxModule,
        DxSelectBoxModule,
        DxNumberBoxModule,
        DxColorBoxModule,
        DxButtonModule,
        DxScrollViewModule,
        DxDataGridModule,
        PreviewModule,
        AppRoutingModule
    ],
    providers: [
        BuilderService,
        MetadataRepositoryService,
        NamesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
