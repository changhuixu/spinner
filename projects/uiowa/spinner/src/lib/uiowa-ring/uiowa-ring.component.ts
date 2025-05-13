import { Attribute, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'uiowa-ring',
  standalone: false,
  templateUrl: './uiowa-ring.component.html',
  styleUrls: ['./uiowa-ring.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiowaRingComponent {
  constructor(@Attribute('size') public size: number) {
    if (!this.size || isNaN(this.size) || this.size < 0) {
      this.size = 4;
    }
  }
}
