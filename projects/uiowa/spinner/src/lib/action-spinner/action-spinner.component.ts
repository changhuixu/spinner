import { Component, Attribute } from '@angular/core';

@Component({
  selector: 'action-spinner',
  templateUrl: './action-spinner.component.html',
  styleUrls: ['./action-spinner.component.css']
})
export class ActionSpinnerComponent {
  constructor(@Attribute('size') public size: number) {
    if (!this.size || isNaN(this.size) || this.size < 0) {
      this.size = 1;
    }
  }
}
