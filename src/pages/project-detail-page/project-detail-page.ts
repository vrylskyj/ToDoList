import { Component } from '@angular/core';
import {NavController, NavParams, Events} from "ionic-angular";
import {CreateTaskPage} from "../create-task-page/create-task-page";
import {TasksProvider} from "../../providers/tasks-provider";
import {Task} from "../../models/task";
import {ProjectsProvider} from "../../providers/projects-provider";
import {EditTaskPage} from "../edit-task-page/edit-task-page";

enum Priority{
  Lowest,
  Low,
  Mid,
  High
}

@Component({
  selector: 'page-project-detail-page',
  templateUrl: 'project-detail-page.html',
})
export class ProjectDetailPage {
  title;
  public tasks: Array<Task> =[];
  public projectId: string;
  countTasks = 0;

  private project;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public events: Events,
              public tasksProvider: TasksProvider,
              public projectsProvider: ProjectsProvider) {

    this.project = this.navParams.get('project');
    this.title = this.project.title;

    this.tasks = this.tasksProvider.getTasksForProject(this.project.id);

    events.subscribe('task-create', (newTask) => {
      this.tasks.push(newTask);
      this.project.countTasks = this.tasks.length;
      this.projectsProvider.updateProject(this.project);
    });
  }

  ngOnDestroy() {
    this.events.unsubscribe('task-create')
  }

  addTask() {
   this.navCtrl.push(CreateTaskPage, {
     projectId: this.project.id
   });
  }

  goToBack() {
    this.navCtrl.pop();
  }

  doneTask(task) {
    this.tasksProvider.removeTask(task);
    this.tasks = this.tasksProvider.getTasksForProject(this.project.id);
    this.project.countTasks = this.tasks.length;
    this.projectsProvider.updateProject(this.project);
  }

  editTask(task) {
    this.navCtrl.push(EditTaskPage, {
      task:task
    })
  }
}
