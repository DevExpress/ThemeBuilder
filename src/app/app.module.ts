import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import {
    DxButtonModule,
    DxCheckBoxModule,
    DxColorBoxModule,
    DxDataGridModule,
    DxFileUploaderModule,
    DxLoadPanelModule,
    DxNumberBoxModule,
    DxPopupModule,
    DxRadioGroupModule,
    DxScrollViewModule,
    DxSelectBoxModule,
    DxTabPanelModule,
    DxTextAreaModule,
    DxTextBoxModule,
    DxTooltipModule,
    DxValidatorModule
} from 'devextreme-angular';

import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { HeaderComponent, IncludesPipe } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PreviewLayoutComponent } from './layouts/preview-layout/preview-layout.component';

import { AdvancedComponent } from './advanced/advanced.component';
import { AppComponent } from './app.component';
import { IconBootstrapComponent } from './icons/icon-bootstrap/icon-bootstrap.component';
import { IconExportComponent } from './icons/icon-export/icon-export.component';
import { IconGenericComponent } from './icons/icon-generic/icon-generic.component';
import { IconFluentComponent } from './icons/icon-fluent/icon-fluent.component';
import { IconMaterialComponent } from './icons/icon-material/icon-material.component';
import { IconMetadataComponent } from './icons/icon-metadata/icon-metadata.component';
import { IconThemeCircleComponent } from './icons/icon-theme-circle/icon-theme-circle.component';
import { IconLogoComponent } from './icons/icon-logo/icon-logo.component';
import { IconThemesComponent } from './icons/icon-themes/icon-themes.component';
import { IframeComponent } from './iframe/iframe.component';
import { ImportBootstrapComponent } from './import/import-bootstrap/import-bootstrap.component';
import { IndexComponent } from './index/index.component';
import { BackNavigatorComponent } from './left-menu/back-navigator/back-navigator.component';
import { BaseParametersComponent } from './left-menu/base-parameters/base-parameters.component';
import { EditorComponent } from './left-menu/editor/editor.component';
import { LeftMenuComponent } from './left-menu/main/left-menu.component';
import { SearchOpenerComponent } from './left-menu/search-opener/search-opener.component';
import { MasterComponent } from './master/master.component';
import { PreviewIndexComponent } from './preview/index.component';
import { NotifyErrorComponent } from './notify-error/notify-error.component';

import { ThemeBuilderService } from './theme-builder.service';
import { ImportService } from './import.service';
import { LoadingService } from './loading.service';
import { MetadataRepositoryService } from './meta-repository.service';
import { NamesService } from './names.service';
import { NotificationsService } from './notification.service';

import { ImportMetaComponent } from './import/import-meta/import-meta.component';
import { BootstrapUploaderComponent } from './layouts/bootstrap-uploader/bootstrap-uploader.component';
import { ButtonComponent } from './layouts/button/button.component';
import { ExportPopupComponent } from './layouts/header/export-popup/export-popup.component';
import { HeaderButtonComponent } from './layouts/header/header-button/header-button.component';
import { HelpButtonComponent } from './layouts/header/help-button/help-button.component';
import { ImportPopupComponent } from './layouts/header/import-popup/import-popup.component';
import { PopupComponent } from './layouts/header/popup/popup.component';
import { LoadingComponent } from './layouts/loading/loading.component';
import { PreviewModule } from './preview/preview.module';
import { ButtonIconComponent } from './icons/button-icon/button-icon.component';
import { IconLoadingComponent } from './icons/icon-loading/icon-loading.component';
import { HelpTooltipComponent } from './layouts/header/export-popup/help-tooltip/help-tooltip.component';
import { IconTmInfoComponent } from './icons/icon-tm-info/icon-tm-info.component';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        MasterComponent,
        ImportBootstrapComponent,
        IconThemesComponent,
        IconGenericComponent,
        IconMaterialComponent,
        IconFluentComponent,
        IconMetadataComponent,
        IconExportComponent,
        IconTmInfoComponent,
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
        FooterComponent,
        SearchOpenerComponent,
        BackNavigatorComponent,
        IconLogoComponent,
        IconThemeCircleComponent,
        HeaderButtonComponent,
        HelpButtonComponent,
        ImportMetaComponent,
        ImportPopupComponent,
        ExportPopupComponent,
        PopupComponent,
        ButtonComponent,
        BootstrapUploaderComponent,
        LoadingComponent,
        ButtonIconComponent,
        IconLoadingComponent,
        HelpTooltipComponent,
        NotifyErrorComponent,
        IncludesPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DxTabPanelModule,
        DxFileUploaderModule,
        DxTextBoxModule,
        DxTextAreaModule,
        DxTooltipModule,
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
        ReactiveFormsModule,
        PreviewModule,
        AppRoutingModule
    ],
    providers: [
        ThemeBuilderService,
        MetadataRepositoryService,
        NamesService,
        ImportService,
        LoadingService,
        NotificationsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
