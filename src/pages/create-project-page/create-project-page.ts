import { Component } from '@angular/core';
import {NavController, Events, AlertController} from "ionic-angular";
import {ProjectsProvider} from "../../providers/projects-provider";
import {Project} from "../../models/project";
import {ColorPage} from "../color-page/color-page";

@Component({
  selector: 'page-create-project-page',
  templateUrl: 'create-project-page.html',
})

export class CreateProjectPage {

  data =  {title : "", colorCode : ""};

  constructor(public navCtrl: NavController, public projectsProvider: ProjectsProvider, public events:Events, public alertCtrl: AlertController) {
    //
  }

  saveProject() {
    if(this.checkInput()){
      let newProject = new Project(this.data.title, this.data.colorCode);
      this.projectsProvider.saveProject(newProject);
      this.events.publish('project-create', newProject);
      this.navCtrl.pop();
    }

  }

  goToBack() {
    this.navCtrl.pop();
  }

  selectColorList() {
    this.navCtrl.push(ColorPage, {data: this.data});
  }

  checkInput() {
    if (this.data.title.length === 0) {
      const alert = this.alertCtrl.create({
        title: 'Please input title',
        buttons: ['Close']
      });

      alert.present();
      return false;
    }

    return true;

  }

}
