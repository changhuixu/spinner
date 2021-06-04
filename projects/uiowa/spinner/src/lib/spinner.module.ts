import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionSpinnerComponent } from './action-spinner/action-spinner.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { UiowaRingComponent } from './uiowa-ring/uiowa-ring.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ActionSpinnerComponent,
    LoadingBarComponent,
    UiowaRingComponent,
  ],
  exports: [ActionSpinnerComponent, LoadingBarComponent, UiowaRingComponent],
})
export class SpinnerModule {}
