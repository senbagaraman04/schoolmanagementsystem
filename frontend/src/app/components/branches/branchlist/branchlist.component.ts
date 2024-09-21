import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'rams-sms-branchlist',
  templateUrl: './branchlist.component.html',
  styleUrl: './branchlist.component.scss'
})
export class BranchlistComponent {


  showTable = true;
  public formBuilder: FormBuilder = inject(FormBuilder);

  public  createBranchFormGroup: FormGroup = this.formBuilder.group({
    branchName: new FormControl(''),
    branchPhone: new FormControl(''),
    branchAddress: new FormControl('')
  });

  addBranchClick() {
    console.log('addBranchClick');
    this.showTable = false;
  }

  getFormControlDetaisl(controlName: string){  
    return this.createBranchFormGroup.get(controlName) ? this.createBranchFormGroup.get(controlName) as FormControl : new FormControl('') as FormControl;
  }
  


  saveBranchClick(){

  }
}
