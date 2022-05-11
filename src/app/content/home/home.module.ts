import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: ':id',
        loadChildren: () =>
          import('../detail/detail.module').then((m) => m.DetailModule),
      },
    ]),
  ],
  exports: [],
  declarations: [HomeComponent],
})
export class HomeModule {}
