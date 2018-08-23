import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule }  from './app-routing.module';

import {
  DxButtonModule,
  DxTabsModule,
  DxFileUploaderModule,
  DxTextBoxModule,
  DxSelectBoxModule,
  DxNumberBoxModule,
  DxColorBoxModule, 
  DxFormModule} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { IndexComponent }   from './index/index.component';
import { MasterComponent }      from './master/master.component';
import { ImportBootstrapComponent } from './import-bootstrap/import-bootstrap.component';
import { BuilderService } from './builder.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MasterComponent,
    ImportBootstrapComponent
  ],
  entryComponents: [  
    IndexComponent,
    ImportBootstrapComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DxFormModule,
    DxTabsModule,
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
export class AppModule {  }
