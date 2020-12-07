import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'home', component: HomeComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
