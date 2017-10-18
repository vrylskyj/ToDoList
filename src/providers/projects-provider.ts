import {Injectable} from '@angular/core';
import {Project} from "../models/project";
import {DataProvider} from "./data-provider";


@Injectable()
export class ProjectsProvider {
  private projects: Array<Project> = [];
  public tasksCount = 0;

  constructor( public  dataService: DataProvider) {
    this.dataService.getData('projects').then((projects)=>{
      if (projects) {
        this.projects = projects;
      }
    });

  }

  getProjects() {
    return this.dataService.getData('projects');
  }

  getProjectForId(projectId) {
    for (let i = 0; i < this.projects.length; i++) {
      let project = this.projects[i];
      if (project['id'] === projectId) {
        return project;
      }
    }
    return null;
  }

  saveProject(project:Project) {
    this.projects.push(project);
    this.dataService.save(this.projects, 'projects');
  }

  updateProject(project:Project) {
    let index = this.indexForProject(project);
    this.projects[index] = project;
    this.dataService.save(this.projects, 'projects');
  }

  indexForProject(project) {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i]['id'] === project.id) {
        return i;
      }
    }
    return -1;
  }


}




