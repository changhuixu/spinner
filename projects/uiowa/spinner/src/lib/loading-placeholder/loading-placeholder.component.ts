import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading-placeholder',
  standalone: false,
  template: `<div class="placeholder-item"></div>`,
  styleUrls: ['./loading-placeholder.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingPlaceholderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
