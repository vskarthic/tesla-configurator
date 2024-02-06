import { RouterModule, Routes } from '@angular/router';
import { TeslaHomeComponent } from './tesla-home/tesla-home.component';
import { NgModule } from '@angular/core';
import { TeslaConfigComponent } from './tesla-config/tesla-config.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: TeslaHomeComponent },
    { path: 'config', component: TeslaConfigComponent },
    {
        path: 'summary',
        component: SummaryComponent,
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }