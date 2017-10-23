import {NgModule} from '@angular/core';
import {ShareModule} from '../share/share.module';
import {MarkdownModule} from 'angular2-markdown';
import {AdminRoutingModule} from './admin-routing.module';

import {AdminComponent} from './admin.component';
import {LabelComponent} from './label/label.component';
import {ArticleListComponent} from './article-list/article-list.component';
import {ArticleWriteComponent} from './article-write/article-write.component';
import {LoginComponent} from './login/login.component';

import {AuthGuardService} from './services/auth-guard.service';

@NgModule({
  imports: [
    ShareModule,
    MarkdownModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    LabelComponent,
    ArticleListComponent,
    ArticleWriteComponent,
    LoginComponent,
  ],
  providers: [
    AuthGuardService
  ]
})
export class AdminModule {
}
