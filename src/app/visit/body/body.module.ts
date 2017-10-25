import {NgModule} from '@angular/core';
import {ShareModule} from '../../share/share.module';
import {MarkdownModule} from 'angular2-markdown';
import {BodyRoutingModule} from './body-routing.module';

import {BodyComponent} from './body.component';
import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';

@NgModule({
  imports: [
    ShareModule,
    MarkdownModule,
    BodyRoutingModule,
  ],
  declarations: [
    BodyComponent,
    HomeComponent,
    ArticleComponent
  ],
  exports: [
    BodyComponent
  ]
})
export class BodyModule {
}
