import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rams-sms-button',
  templateUrl: './rams-button.component.html',
  styleUrl: './rams-button.component.scss'
})
export class RamsButtonComponent {


  @Input() buttonText:string = '';

  @Input() isDisabled:boolean = false;

  @Input() buttonClass:string = '';

  @Output() buttonClick = new EventEmitter<void>();


  public handleClick(){
this.buttonClick.emit();
  }
  
}
