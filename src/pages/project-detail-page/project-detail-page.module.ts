import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectDetailPage } from './project-detail-page';

@NgModule({
  declarations: [
    ProjectDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectDetailPage),
  ],
})
export class ProjectDetailPageModule {}
