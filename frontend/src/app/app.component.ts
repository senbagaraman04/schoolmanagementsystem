import { Component } from '@angular/core';

@Component({
  selector: 'rams-sms-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'schoolmanagementsystem';

  collapsed = false;

  navbarExpandButtonText = 'Expand';

  navbarCollapseButtonText = 'Collapse';


  items = [
    
  ]

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    if (this.collapsed) {
      this.navbarExpandButtonText = 'Expand';
      this.navbarCollapseButtonText = 'Collapse';
    } else {
      this.navbarExpandButtonText = 'Collapse';
      this.navbarCollapseButtonText = 'Expand';
    }
  }
}
