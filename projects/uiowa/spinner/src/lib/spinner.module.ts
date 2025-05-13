import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActionSpinnerComponent } from './action-spinner/action-spinner.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { LoadingPlaceholderComponent } from './loading-placeholder/loading-placeholder.component';
import { UiowaRingComponent } from './uiowa-ring/uiowa-ring.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ActionSpinnerComponent,
    LoadingBarComponent,
    UiowaRingComponent,
    LoadingPlaceholderComponent,
  ],
  exports: [
    ActionSpinnerComponent,
    LoadingBarComponent,
    UiowaRingComponent,
    LoadingPlaceholderComponent,
  ],
})
export class SpinnerModule {}
