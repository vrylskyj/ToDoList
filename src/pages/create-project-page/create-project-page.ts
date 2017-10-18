import { Component } from '@angular/core';
import {NavController, Events} from "ionic-angular";
import {ProjectsProvider} from "../../providers/projects-provider";
import {Project} from "../../models/project";

@Component({
  selector: 'page-create-project-page',
  templateUrl: 'create-project-page.html',
})

export class CreateProjectPage {
  title = "";
  colorCode = "";


  constructor(public navCtrl: NavController, public projectsProvider: ProjectsProvider, public events:Events) {

  }

  saveProject(){
    let newProject = new Project(this.title, this.colorCode);
    this.projectsProvider.saveProject(newProject);
    this.events.publish('project-create', newProject);
    this.navCtrl.pop();
  }

  goToBack(){
    this.navCtrl.pop();
  }

}
