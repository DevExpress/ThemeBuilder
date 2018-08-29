import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { MasterComponent } from './master/master.component';
import { ImportBootstrapComponent } from './import-bootstrap/import-bootstrap.component';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'master', component: IndexComponent },
    { path: 'import', component: IndexComponent },
    { path: 'import-bootstrap', component: ImportBootstrapComponent },
    { path: 'master/:theme', component: MasterComponent },
    { path: 'master/:theme/:color-scheme', component: MasterComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
