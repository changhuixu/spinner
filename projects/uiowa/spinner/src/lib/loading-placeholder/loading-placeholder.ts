import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'loading-placeholder',
  imports: [],
  template: `<div class="ld-placeholder"></div>`,
  styleUrl: './loading-placeholder.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingPlaceholder {}
