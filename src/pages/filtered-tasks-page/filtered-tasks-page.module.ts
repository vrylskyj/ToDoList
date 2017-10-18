import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilteredTasksPage } from './filtered-tasks-page';

@NgModule({
  declarations: [
    FilteredTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(FilteredTasksPage),
  ],
})
export class FilteredTasksPageModule {}
