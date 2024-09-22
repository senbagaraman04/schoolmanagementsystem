import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'rams-sms-branchform',
  templateUrl: './branchform.component.html',
  styleUrl: './branchform.component.scss'
})
export class BranchformComponent {


  public formBuilder: FormBuilder = inject(FormBuilder);

  public  createBranchFormGroup: FormGroup = this.formBuilder.group({
    branchName: new FormControl(''),
    branchPhone: new FormControl(''),
    branchAddress: new FormControl('')
  });


  getFormControlDetaisl(controlName: string){  
    return this.createBranchFormGroup.get(controlName) ? this.createBranchFormGroup.get(controlName) as FormControl : new FormControl('') as FormControl;
  }
  



  saveBranchClick(){

  }
  
}
