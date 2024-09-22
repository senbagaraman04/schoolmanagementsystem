/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CreateBranchPayload } from '../models';
import { BranchService } from '../service/branch.service';

@Component({
  selector: 'rams-sms-branchform',
  templateUrl: './branchform.component.html',
  styleUrl: './branchform.component.scss'
})
export class BranchformComponent {


  private formBuilder: FormBuilder = inject(FormBuilder);

  private branchService: BranchService = inject(BranchService);

  public  createBranchFormGroup: FormGroup = this.formBuilder.group({
    branchName: new FormControl(''),
    branchPhone: new FormControl(''),
    branchAddress: new FormControl('')
  });


  getFormControlDetaisl(controlName: string){  
    return this.createBranchFormGroup.get(controlName) ? this.createBranchFormGroup.get(controlName) as FormControl : new FormControl('') as FormControl;
  }
  



  saveBranchClick(){
   const payload: CreateBranchPayload = {
    branchAddress: this.createBranchFormGroup.getRawValue().branchAddress,
    branchName: this.createBranchFormGroup.getRawValue().branchName,
    branchPhone: this.createBranchFormGroup.getRawValue().branchPhone
   };


   this.branchService.createBranch(payload).subscribe(() => {});

  }
  
}
