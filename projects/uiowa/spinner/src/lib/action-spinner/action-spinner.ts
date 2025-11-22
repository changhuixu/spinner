import { Attribute, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'action-spinner',
  imports: [],
  template: `
    <div class="fading-circle-spinner" [style.width.rem]="size" [style.height.rem]="size">
      <div class="circle1 circle"></div>
      <div class="circle2 circle"></div>
      <div class="circle3 circle"></div>
      <div class="circle4 circle"></div>
      <div class="circle5 circle"></div>
      <div class="circle6 circle"></div>
      <div class="circle7 circle"></div>
      <div class="circle8 circle"></div>
      <div class="circle9 circle"></div>
      <div class="circle10 circle"></div>
      <div class="circle11 circle"></div>
      <div class="circle12 circle"></div>
    </div>
  `,
  styleUrl: './action-spinner.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionSpinner {
  constructor(@Attribute('size') public size: number) {
    if (!this.size || isNaN(this.size) || this.size < 0) {
      this.size = 1;
    }
  }
}
