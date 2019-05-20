import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { PreviewLayoutComponent } from './layouts/preview-layout/preview-layout.component';

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
            { path: '', component: IndexComponent, data: { routeId: 1, docHash: '' } },
            { path: 'master', component: IndexComponent, data: { routeId: 2, docHash: '#Get_Started/Create_a_New_Theme' } },
            { path: 'import', component: IndexComponent, data: { routeId: 2, docHash: '#Get_Started/Import_an_Existing_Theme' } },
            { path: 'import/bootstrap', component: ImportBootstrapComponent, data: { routeId: 3, docHash: '#Get_Started/Import_an_Existing_Theme' } },
            { path: 'import/meta', component: ImportMetaComponent, data: { routeId: 3, docHash: '#Get_Started/Import_an_Existing_Theme' } },
            { path: 'master/:theme/:color-scheme', component: MasterComponent, data: { routeId: 3, docHash: '' } },
            { path: 'advanced', redirectTo: '/advanced/generic/light/base.common', pathMatch: 'full' },
            { path: 'advanced/:theme/:color-scheme', redirectTo: 'advanced/:theme/:color-scheme/base.common', pathMatch: 'full' },
            { path: 'advanced/:theme/:color-scheme/grids', redirectTo: '/advanced/:theme/:color-scheme/grids/datagrid', pathMatch: 'full' },
            { path: 'advanced/:theme/:color-scheme/datagrid', redirectTo: '/advanced/:theme/:color-scheme/grids/datagrid', pathMatch: 'full' },
            { path: 'advanced/:theme/:color-scheme/treelist', redirectTo: '/advanced/:theme/:color-scheme/grids/treelist', pathMatch: 'full' },
            { path: 'advanced/:theme/:color-scheme/:widget', redirectTo: '/advanced/:theme/:color-scheme/:widget/', pathMatch: 'full'},
            { path: 'advanced/:theme/:color-scheme/:group/:widget', component: AdvancedComponent, data: { routeId: 4, docHash: '#Customize_the_Theme' } },
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
