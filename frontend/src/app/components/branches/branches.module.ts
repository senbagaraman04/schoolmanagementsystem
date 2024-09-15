import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { CommonModule } from '@angular/common';
import { BranchlistComponent } from './branchlist/branchlist.component';
 
export const routes: Routes = [
  {
    path: "",
    component: BranchlistComponent
  }
];

@NgModule({
  declarations: [
    BranchlistComponent
  ],
  imports: [
     CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: []
})
export class BranchesModule { }
