import {NgModule} from '@angular/core';
import {ShareModule} from '../share/share.module';
import {BodyModule} from './body/body.module';

import {VisitComponent} from './visit.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  imports: [
    ShareModule,
    BodyModule,
  ],
  declarations: [
    VisitComponent,
    HeaderComponent,
  ]
})
export class VisitModule {
}
