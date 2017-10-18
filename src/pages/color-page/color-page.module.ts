import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColorPage } from './color-page';

@NgModule({
  declarations: [
    ColorPage,
  ],
  imports: [
    IonicPageModule.forChild(ColorPage),
  ],
})
export class ColorPageModule {}
