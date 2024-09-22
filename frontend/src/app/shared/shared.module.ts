import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RamsButtonComponent } from './components/rams-button/rams-button.component';
 
@NgModule({
  declarations: [
 
RamsButtonComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
   ],
  providers: [],
  bootstrap: [],
  exports:[
    RamsButtonComponent
  ]
})
export class SharedModule { }
