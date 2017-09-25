import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyOwnCustomMaterialModule} from '../my-own-custom-material/my-own-custom-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    MyOwnCustomMaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  declarations: []
})
export class ShareModule {
}
