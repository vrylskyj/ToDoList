import { Injectable } from '@angular/core';
import { Task } from "../models/task";

@Injectable()
export class TasksMapper {

  constructor() {
    //
  }

  map(data) {
    let tasks = [];
    data.forEach((value, index) => {
      tasks.push(this.mapOne(value));
    });
    return tasks;
  }

  mapOne(data) {
    return new Task(data['id'], data['title'], parseInt(data['priority']), data['projectId']);
  }

}
