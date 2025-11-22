import { Attribute, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'loading-bar',
  imports: [],
  template: ` <span class="loading-bars">
    <span
      class="loading-bars-block block-1"
      [style.height.rem]="size"
      [style.width.rem]="size / 4"
    ></span>
    <span
      class="loading-bars-block block-2"
      [style.height.rem]="size"
      [style.width.rem]="size / 4"
    ></span>
    <span
      class="loading-bars-block block-3"
      [style.height.rem]="size"
      [style.width.rem]="size / 4"
    ></span>
  </span>`,
  styleUrl: './loading-bar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingBar {
  constructor(@Attribute('size') public size: number) {
    if (!this.size || isNaN(this.size) || this.size < 0) {
      this.size = 1;
    }
  }
}
