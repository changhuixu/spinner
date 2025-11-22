import { Attribute, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'uiowa-ring',
  imports: [],
  template: `
    <div
      class="ring"
      [style.height.rem]="size"
      [style.width.rem]="size"
      [style.border-width.rem]="size / 4"
    ></div>
  `,
  styleUrl: './uiowa-ring.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiowaRing {
  constructor(@Attribute('size') public size: number) {
    if (!this.size || isNaN(this.size) || this.size < 0) {
      this.size = 4;
    }
  }
}
