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
    DxFormModule
} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MasterComponent } from './master/master.component';
import { ImportBootstrapComponent } from './import-bootstrap/import-bootstrap.component';
import { BuilderService } from './builder.service';
import { IconThemesComponent } from './icons/icon-themes/icon-themes.component';
import { IconGenericComponent } from './icons/icon-generic/icon-generic.component';
import { IconMaterialComponent } from './icons/icon-material/icon-material.component';
import { IconMetadataComponent } from './icons/icon-metadata/icon-metadata.component';
import { IconExportComponent } from './icons/icon-export/icon-export.component';
import { IconBootstrapComponent } from './icons/icon-bootstrap/icon-bootstrap.component';
import { IconArrowComponent } from './icons/icon-arrow/icon-arrow.component';

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
        IconArrowComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        DxFormModule,
        DxTabPanelModule,
        DxFileUploaderModule,
        DxTextBoxModule,
        DxSelectBoxModule,
        DxNumberBoxModule,
        DxColorBoxModule,
        DxButtonModule,
        AppRoutingModule
    ],
    providers: [BuilderService],
    bootstrap: [AppComponent]
})
export class AppModule { }
