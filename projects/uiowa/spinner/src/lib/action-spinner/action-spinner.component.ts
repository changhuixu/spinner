import { Attribute, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'action-spinner',
  standalone: false,
  templateUrl: './action-spinner.component.html',
  styleUrls: ['./action-spinner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionSpinnerComponent {
  constructor(@Attribute('size') public size: number) {
    if (!this.size || isNaN(this.size) || this.size < 0) {
      this.size = 1;
    }
  }
}
