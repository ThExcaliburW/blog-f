import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MarkdownModule} from 'angular2-markdown';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MarkdownModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MarkdownModule
  ],
  declarations: []
})
export class ShareModule {
}
