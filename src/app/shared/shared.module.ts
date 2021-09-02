import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SHARED_NG_BOOTSTRAP_MODULES } from './shared-ng-bootstrap.module';

// #region third libs
const THIRDMODULES: Array<Type<any>> = [];
// #endregion

// #region your componets & directives
const COMPONENTS: Array<Type<any>> = [];
const DIRECTIVES: Array<Type<any>> = [];
// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...SHARED_NG_BOOTSTRAP_MODULES,
    // third libs
    ...THIRDMODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...SHARED_NG_BOOTSTRAP_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class SharedModule {}
