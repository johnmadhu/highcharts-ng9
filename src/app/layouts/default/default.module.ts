import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { HighchartsChartModule } from 'highcharts-angular';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { AreaComponent } from 'src/app/widget/area/area.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    AreaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HighchartsChartModule,
    MatSidenavModule,
    MatDividerModule
  ]
})
export class DefaultModule { }
