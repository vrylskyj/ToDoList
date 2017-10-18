import { Component } from '@angular/core';
import { NavController, NavParams, Events} from "ionic-angular";
import { Task } from "../../models/task";
import { TasksProvider } from "../../providers/tasks-provider";
import { Project } from "../../models/project";
import {ProjectsProvider} from "../../providers/projects-provider";

@Component({
  selector: 'page-edit-task-page',
  templateUrl: 'edit-task-page.html',
})
export class EditTaskPage {

  task: Task;
  projects: Array<Project>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tasksProvider: TasksProvider,
              public events: Events,
              public projectsProvider: ProjectsProvider) {

    this.task = this.navParams.get('task');
    this.projectsProvider.getProjects().then((data) => {
      this.projects = data;
    });
  }

  updateTask() {
    this.tasksProvider.saveTask(this.task);
    // this.events.publish('task-edit', this.task);
    this.navCtrl.pop();
  }

  goToBack(){
    this.navCtrl.pop();
  }

  getProjectForId(projectId) {
    return this.projectsProvider.getProjectForId(projectId);
  }

}
