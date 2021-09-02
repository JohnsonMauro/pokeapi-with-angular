import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';

const COMPONENTS = [BasicComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
})
export class LayoutModule {}
