import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { FilteredTasksPage } from "../filtered-tasks-page/filtered-tasks-page";

@Component({
  selector: 'page-filters-page',
  templateUrl: 'filters-page.html',
})
export class FiltersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //
  }

  ionViewDidLoad() {
    //
  }

  filterTasks(priority){
    this.navCtrl.push (FilteredTasksPage, {
      priority: priority
    })
  }

}
