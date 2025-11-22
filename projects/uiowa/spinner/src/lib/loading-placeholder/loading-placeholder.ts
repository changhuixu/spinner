import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'loading-placeholder',
  imports: [],
  template: `<div class="placeholder"></div>`,
  styleUrl: './loading-placeholder.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingPlaceholder {}
