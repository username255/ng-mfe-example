import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { PageOneComponent } from './components/page-one/page-one.component';
import { PageTwoComponent } from './components/page-two/page-two.component';
import { PreComponent } from './components/pre/pre.component';
import { SharedDataService } from './services';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
  ],
  declarations: [
    CardComponent,
    PreComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  exports: [
    CardComponent,
    PreComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  providers: [
    SharedDataService,
  ],
})
export class SharedUiModule {}
