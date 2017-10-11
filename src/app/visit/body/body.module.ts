import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShareModule} from '../../share/share.module';
import {BodyComponent} from './body.component';
import {HomeComponent} from './home/home.component';
import {BodyRoutingModule} from './body-routing.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ArticleComponent} from './article/article.component';

@NgModule({
  imports: [
    ShareModule,
    BodyRoutingModule,
  ],
  declarations: [
    BodyComponent,
    HomeComponent,
    SidebarComponent,
    ArticleComponent
  ],
  exports: [
    BodyComponent
  ]
})
export class BodyModule {
}
