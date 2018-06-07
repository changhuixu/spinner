import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionSpinnerComponent } from './action-spinner/action-spinner.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ActionSpinnerComponent, LoadingBarComponent],
  exports: [ActionSpinnerComponent, LoadingBarComponent]
})
export class SpinnerModule {}
