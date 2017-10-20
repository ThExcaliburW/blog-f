import {NgModule} from '@angular/core';
import {ShareModule} from '../../share/share.module';

import {HeaderComponent} from './header.component';

@NgModule({
  imports: [
    ShareModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
