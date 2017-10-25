import {NgModule} from '@angular/core';
import {ShareModule} from '../../share/share.module';
import {MarkdownModule} from 'angular2-markdown';
import {BodyRoutingModule} from './body-routing.module';

import {BodyComponent} from './body.component';
import {HomeComponent} from './home/home.component';
import {ArticleComponent} from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleFileComponent } from './article-file/article-file.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    ShareModule,
    MarkdownModule,
    BodyRoutingModule,
  ],
  declarations: [
    BodyComponent,
    HomeComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleFileComponent,
    AboutComponent
  ],
  exports: [
    BodyComponent
  ]
})
export class BodyModule {
}
