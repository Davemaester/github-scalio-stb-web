import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DetailComponent,
      },
    ]),
  ],
  exports: [],
  declarations: [DetailComponent],
})
export class DetailModule {}
