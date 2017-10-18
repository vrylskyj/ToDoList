import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltersPage } from './filters-page';

@NgModule({
  declarations: [
    FiltersPage,
  ],
  imports: [
    IonicPageModule.forChild(FiltersPage),
  ],
})
export class FiltersPageModule {}
