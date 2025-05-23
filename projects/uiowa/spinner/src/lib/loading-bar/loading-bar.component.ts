import { Attribute, ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'loading-bar',
  standalone: false,
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingBarComponent {
  constructor(@Attribute('size') public size: number) {
    if (!this.size || isNaN(this.size) || this.size < 0) {
      this.size = 1;
    }
  }
}
