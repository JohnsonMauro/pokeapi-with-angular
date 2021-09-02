import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

const COMPONENTS = [HomeComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
