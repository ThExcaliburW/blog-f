import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MdButtonModule, MdCheckboxModule, MdIconModule, MdSidenavModule, MdToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
  ],
  exports: [
    MdButtonModule,
    MdCheckboxModule,
    MdIconModule,
    MdSidenavModule,
    MdToolbarModule,
  ],
})
export class MyOwnCustomMaterialModule {
}
