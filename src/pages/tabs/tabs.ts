import { Component } from '@angular/core';
import {FiltersPage} from "../filters-page/filters-page";
import {ProjectsPage} from "../projects-page/projects-page";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProjectsPage;
  tab2Root = FiltersPage;

  constructor() {

  }
}
