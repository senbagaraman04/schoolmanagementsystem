import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashboardlistComponent } from './dashboardlist/dashboardlist.component';
 
export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardlistComponent
  }
];

@NgModule({
  declarations: [
    DashboardlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
