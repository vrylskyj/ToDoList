import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Task} from "../../models/task";
import {Project} from "../../models/project";
import {TasksProvider} from "../../providers/tasks-provider";
import {ProjectsProvider} from "../../providers/projects-provider";

@Component({
  selector: 'page-filtered-tasks-page',
  templateUrl: 'filtered-tasks-page.html',
})

export class FilteredTasksPage {
  filteredTasks: Array<Task> = [];
  filteredPriority: string;
  projects: Array<Project> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public tasksProvider: TasksProvider,
              public projectsProvider: ProjectsProvider) {

    this.filteredPriority = this.navParams.get('priority');
    this.filteredTasks = this.tasksProvider.getTasksForPriority(this.filteredPriority);
  }

  getProjectForId(projectId) {
    return this.projectsProvider.getProjectForId(projectId);
  }

}
