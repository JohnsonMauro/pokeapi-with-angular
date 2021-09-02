import { NgModule, Type } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { RouteRoutingModule } from './routes-routing.module';

const COMPONENTS: Array<Type<null>> = [];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule, RouteRoutingModule],
})
export class RoutesModule {}
