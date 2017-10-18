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
  private priority;
  private projectId;
  private title;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tasksProvider: TasksProvider,
              public events: Events,
              public projectsProvider: ProjectsProvider) {

    this.task = this.navParams.get('task');
    this.projectsProvider.getProjects().then((data) => {
      this.projects = data;
    });

    this.projectId = this.task.projectId;
    this.priority = this.task.priority;
    this.title = this.task.title;
  }

  updateTask() {
    this.task.priority = parseInt(this.priority);
    this.task.projectId = this.projectId;
    this.task.title = this.title;
    this.tasksProvider.updateTask(this.task);
    this.events.publish('task-edit', this.task);
    this.navCtrl.pop();
  }

  goToBack(){
    this.navCtrl.pop();
  }

  getProjectForId(projectId) {
    return this.projectsProvider.getProjectForId(projectId);
  }

}
