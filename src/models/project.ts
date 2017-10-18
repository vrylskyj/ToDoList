import { UUID } from 'angular2-uuid';

export class Project {

  public  readonly title: string;
  public  readonly colorCode: string;
  public  id: string;
  public  countTasks = 0;

  constructor(title: string, colorCode:string) {
    this.id = this.generateId();
    this.title = title;
    this.colorCode = colorCode;
  }

  private generateId(){
    return this.id = UUID.UUID();
  }

  setTasksCount(count){
    this.countTasks = count;
  }
}
