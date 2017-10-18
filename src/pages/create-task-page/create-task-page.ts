import {ProjectsProvider} from "../../providers/projects-provider";

import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, Events, AlertController} from "ionic-angular";
import {Task} from "../../models/task";
import {TasksProvider} from "../../providers/tasks-provider";

@Component({
  selector: 'page-create-task-page',
  templateUrl: 'create-task-page.html',
})
export class CreateTaskPage {
  title = "";
  priority = "1";
  projectId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public tasksProvider: TasksProvider, public events: Events,
              public projectProvider: ProjectsProvider, public alertCtrl: AlertController) {
    this.projectId = this.navParams.get('projectId');
  }

  saveTask() {
    if(this.checkInput()){
      let newTask = new Task(null, this.title, parseInt(this.priority), this.projectId);
      this.tasksProvider.saveTask(newTask);
      this.events.publish('task-create', newTask);
      this.navCtrl.pop();
    }
  }


  goToBack() {
    this.navCtrl.pop();
  }

  checkInput() {
    if (this.title.length === 0) {
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
