import {ProjectsProvider} from "../../providers/projects-provider";

import { Component } from '@angular/core';
import {NavController, NavParams, ViewController, Events} from "ionic-angular";
import {Task} from "../../models/task";
import {TasksProvider} from "../../providers/tasks-provider";

@Component({
  selector: 'page-create-task-page',
  templateUrl: 'create-task-page.html',
})
export class CreateTaskPage {
  title = "";
  priority;
  projectId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tasksProvider: TasksProvider, public events: Events,
                      public projectProvider: ProjectsProvider) {
    this.projectId = this.navParams.get('projectId');
  }

  saveTask() {
    let newTask = new Task(null, this.title, parseInt(this.priority), this.projectId);
    this.tasksProvider.saveTask(newTask);
    this.events.publish('task-create', newTask);
    this.navCtrl.pop();
  }

  goToBack(){
    this.navCtrl.pop();
  }

}
