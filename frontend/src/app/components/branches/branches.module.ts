import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { CommonModule } from '@angular/common';
import { BranchlistComponent } from './branchlist/branchlist.component';
import { BranchformComponent } from './branchform/branchform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
export const routes: Routes = [
  {
    path: '',
    component: BranchlistComponent
  }
];

@NgModule({
  declarations: [
    BranchlistComponent,
    BranchformComponent,

    
  ],
  imports: [
     CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: []
})
export class BranchesModule { }
