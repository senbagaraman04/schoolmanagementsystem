import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashboardlistComponent } from './dashboardlist/dashboardlist.component';
import { CommonModule } from '@angular/common';
 
export const routes: Routes = [
  {
    path: '',
    component: DashboardlistComponent
  }
];

@NgModule({
  declarations: [
    DashboardlistComponent
  ],
  imports: [
     CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
