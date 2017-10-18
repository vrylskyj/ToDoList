import { Component } from '@angular/core';
import {NavController, NavParams, Events} from "ionic-angular";
import {CreateProjectPage} from "../create-project-page/create-project-page";
import {ProjectDetailPage} from "../project-detail-page/project-detail-page";
import {ProjectsProvider} from "../../providers/projects-provider";
import {TasksProvider} from "../../providers/tasks-provider";

@Component({
  selector: 'page-projects-page',
  templateUrl: 'projects-page.html',
})
export class ProjectsPage {
  public projects = [];


  constructor(public navCtrl: NavController,
              public projectProvider: ProjectsProvider,
              public tasksProvider: TasksProvider,
              public events: Events) {


    this.projectProvider.getProjects().then((projects)=>{
      if (projects) {
        this.projects = projects;
      }
    });

    this.tasksProvider.fetchTasks();

    events.subscribe('project-create', (newProject) => {
     this.projects.push(newProject);
    });
  }

  addProject(){
    this.navCtrl.push(CreateProjectPage);
  }

  viewDetailProject(project){
    this.navCtrl.push(ProjectDetailPage, {
      project: project
    });
  }
}


