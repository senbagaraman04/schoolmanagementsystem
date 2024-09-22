import { Component } from '@angular/core';
 
@Component({
  selector: 'rams-sms-branchlist',
  templateUrl: './branchlist.component.html',
  styleUrl: './branchlist.component.scss'
})
export class BranchlistComponent {


  showTable = true;


  addBranchClick() {
    console.log('addBranchClick');
    this.showTable = false;
  }

}
