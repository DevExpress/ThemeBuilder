import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { PreviewLayoutComponent } from './layouts/preview-layout/preview-layout.component';

import { IndexComponent } from './index/index.component';
import { MasterComponent } from './master/master.component';
import { ImportBootstrapComponent } from './import-bootstrap/import-bootstrap.component';
import { PreviewComponent } from './preview/preview.component';
import { AdvancedComponent } from './advanced/advanced.component';

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            { path: '', component: IndexComponent },
            { path: 'master', component: IndexComponent },
            { path: 'import', component: IndexComponent },
            { path: 'import-bootstrap', component: ImportBootstrapComponent },
            { path: 'master/:theme', component: MasterComponent },
            { path: 'master/:theme/:color-scheme', component: MasterComponent },
            { path: 'advanced', redirectTo: '/advanced/generic/light', pathMatch: 'full' },
            { path: 'advanced/:theme/:color-scheme', component: AdvancedComponent },
            { path: 'advanced/:theme/:color-scheme/:widget', component: AdvancedComponent },
        ]
    },
    {
        path: '',
        component: PreviewLayoutComponent,
        children: [
          { path: 'preview/:theme/:color-scheme', component: PreviewComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
