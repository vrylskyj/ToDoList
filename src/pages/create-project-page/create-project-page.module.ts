import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateProjectPage } from './create-project-page';

@NgModule({
  declarations: [
    CreateProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateProjectPage),
  ],
})
export class CreateProjectPageModule {}
