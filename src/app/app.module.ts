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
    DxTextAreaModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxColorBoxModule,
    DxDataGridModule,
    DxScrollViewModule,
    DxPopupModule,
    DxRadioGroupModule,
    DxCheckBoxModule,
    DxValidatorModule,
    DxLoadPanelModule
} from 'devextreme-angular';

import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { PreviewLayoutComponent } from './layouts/preview-layout/preview-layout.component';
import { HeaderComponent } from './layouts/header/header.component';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MasterComponent } from './master/master.component';
import { ImportBootstrapComponent } from './import/import-bootstrap/import-bootstrap.component';
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
import { PreviewIndexComponent } from './preview/index.component';
import { SearchOpenerComponent } from './left-menu/search-opener/search-opener.component';
import { BackNavigatorComponent } from './left-menu/back-navigator/back-navigator.component';
import { IconThemeCircleComponent } from './icons/icon-theme-circle/icon-theme-circle.component';

import { BuilderService } from './builder.service';
import { MetadataRepositoryService } from './meta-repository.service';
import { LoadingService } from './loading.service';
import { NamesService } from './names.service';
import { ImportService } from './import.service';

import { PreviewModule } from './preview/preview.module';
import { HeaderButtonComponent } from './layouts/header/header-button/header-button.component';
import { ImportMetaComponent } from './import/import-meta/import-meta.component';
import { ImportPopupComponent } from './layouts/header/import-popup/import-popup.component';
import { ExportPopupComponent } from './layouts/header/export-popup/export-popup.component';
import { PopupComponent } from './layouts/header/popup/popup.component';
import { ButtonComponent } from './layouts/button/button.component';
import { BootstrapUploaderComponent } from './layouts/bootstrap-uploader/bootstrap-uploader.component';
import { LoadingComponent } from './layouts/loading/loading.component';

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
        PreviewIndexComponent,
        HeaderComponent,
        SearchOpenerComponent,
        BackNavigatorComponent,
        IconThemeCircleComponent,
        HeaderButtonComponent,
        ImportMetaComponent,
        ImportPopupComponent,
        ExportPopupComponent,
        PopupComponent,
        ButtonComponent,
        BootstrapUploaderComponent,
        LoadingComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DxTabPanelModule,
        DxFileUploaderModule,
        DxTextBoxModule,
        DxTextAreaModule,
        DxSelectBoxModule,
        DxNumberBoxModule,
        DxColorBoxModule,
        DxButtonModule,
        DxScrollViewModule,
        DxDataGridModule,
        DxPopupModule,
        DxCheckBoxModule,
        DxRadioGroupModule,
        DxValidatorModule,
        DxLoadPanelModule,
        PreviewModule,
        AppRoutingModule
    ],
    providers: [
        BuilderService,
        MetadataRepositoryService,
        NamesService,
        ImportService,
        LoadingService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
