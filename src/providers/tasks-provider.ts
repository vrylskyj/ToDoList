import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { DataProvider } from "./data-provider";
import { TasksMapper } from "./tasks-mapper";

@Injectable()
export class TasksProvider {

  private tasks: Array<Task> = [];

  constructor(public  dataService: DataProvider, public tasksMapper: TasksMapper) {

  }

  fetchTasks() {
    this.dataService.getData('tasks').then((tasks)=>{
      if (tasks) {
        this.tasks = this.tasksMapper.map(tasks);
      }
    });
  }

  getTasks() {
    return this.tasks;
  }

  /**
   * Get tasks for the specified project
  */
  getTasksForProject(projectId) {
    return this.getTasksForTheKey('projectId', projectId);
  }

  /**
   * Get tasks for priority
   */
  getTasksForPriority(priority) {
    return this.getTasksForTheKey('priority', priority);
  }

  /**
   * Save task
   * @param task
   */
  saveTask(task:Task) {
    this.tasks.push(task);
    this.dataService.save(this.tasks, 'tasks');
  }

  updateTask(task:Task) {
    let index = this.indexForTask(task);
    this.tasks[index] = task;
    this.dataService.save(this.tasks, 'projects');
  }

  removeTask(task:Task) {

    let indexToRemove = -1;
    this.tasks.forEach((value, index) => {
      if (value['id'] === task.id) {
        indexToRemove = index;
      }
    });

    this.tasks.splice(indexToRemove, 1);
    this.dataService.save(this.tasks, 'tasks');
  }

  //MARK: Private

  private getTasksForTheKey(key, value) {

    let tasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      let task = this.tasks[i];
      if (task[key] === value) {
        tasks.push(task);
      }
    }
    return tasks;
  }



  indexForTask(task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i]['id'] === task.id) {
        return i;
      }
    }
    return -1;
  }

}
