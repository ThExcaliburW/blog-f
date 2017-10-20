import {NgModule} from '@angular/core';
import {ShareModule} from '../share/share.module';
import {HeaderModule} from './header/header.module';
import {BodyModule} from './body/body.module';

import {VisitComponent} from './visit.component';

@NgModule({
  imports: [
    ShareModule,
    HeaderModule,
    BodyModule
  ],
  declarations: [
    VisitComponent,
  ]
})
export class VisitModule {
}
