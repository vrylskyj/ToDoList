import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-color-page',
  templateUrl: 'color-page.html',
})
export class ColorPage {
  colors: Array<string>;
  selectedColor;
  projectData;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.colors = ["red", "green", "yellow", "blue", "orange"];
    this.projectData = this.navParams.get('data');
    this.selectedColor = this.projectData.colorCode;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorPage');
  }

  selectColor(color) {
    this.selectedColor = color;
  }

  saveColor() {
    this.projectData.colorCode = this.selectedColor;
    this.navCtrl.pop();
  }

}
