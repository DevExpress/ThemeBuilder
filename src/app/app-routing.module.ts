import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { PreviewLayoutComponent } from './layouts/preview-layout/preview-layout.component';
import { AdvancedLayoutComponent } from './layouts/advanced-layout/advanced-layout.component';

import { IndexComponent } from './index/index.component';
import { MasterComponent } from './master/master.component';

import { ImportBootstrapComponent } from './import/import-bootstrap/import-bootstrap.component';
import { ImportMetaComponent } from './import/import-meta/import-meta.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { PreviewIndexComponent } from './preview/index.component';

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            { path: '', component: IndexComponent, data: { routeId: 1 } },
            { path: 'master', component: IndexComponent, data: { routeId: 2 } },
            { path: 'import', component: IndexComponent, data: { routeId: 2 } },
            { path: 'import/bootstrap', component: ImportBootstrapComponent, data: { routeId: 3 } },
            { path: 'import/meta', component: ImportMetaComponent, data: { routeId: 3 } },
            { path: 'master/:theme/:color-scheme', component: MasterComponent, data: { routeId: 3 } }
        ]
    },
    {
        path: '',
        component: AdvancedLayoutComponent,
        children: [
            { path: 'advanced', redirectTo: '/advanced/generic/light/base.common', pathMatch: 'full' },
            { path: 'advanced/:theme/:color-scheme', redirectTo: 'advanced/:theme/:color-scheme/base.common', pathMatch: 'full' },
            { path: 'advanced/:theme/:color-scheme/:widget', component: AdvancedComponent },
        ]
    },
    {
        path: '',
        component: PreviewLayoutComponent,
        children: [
            { path: 'preview/:theme', component: PreviewIndexComponent },
            { path: 'wizard/:theme', component: PreviewIndexComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
