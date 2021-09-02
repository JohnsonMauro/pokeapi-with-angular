import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RoutesModule } from './routes/routes.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { ModalsComponent } from './components/modal/modal-content.component';

@NgModule({
  declarations: [AppComponent, ModalsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    LayoutModule,
    RoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
