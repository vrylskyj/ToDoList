import { UUID } from 'angular2-uuid';

enum Priority {
  Lowest,
  Low,
  Mid,
  High
}

export class Task {

  public readonly title: string;
  public readonly priority: Priority;
  public readonly projectId: string;
  public id: string;

  constructor(id:string, title: string, priority: Priority, projectId: string) {
    this.title = title;
    this.priority = priority;
    this.projectId = projectId;
    this.id = id;
    if (!this.id) {
      this.id = this.generateId();
    }
  }

  private generateId() {
    return this.id = UUID.UUID();
  }

  getColor() {
    switch (this.priority) {
      case Priority.Lowest: {
        return "grey";
      }
      case Priority.Low: {
        return "yellow"
      }
      case Priority.Mid: {
        return "orange"
      }
      case Priority.High: {
        return "red"
      }
    }
  }

}
