import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ProjectsPage} from "../pages/projects-page/projects-page";
import {FiltersPage} from "../pages/filters-page/filters-page";
import {CreateProjectPage} from "../pages/create-project-page/create-project-page";
import {ProjectDetailPage} from "../pages/project-detail-page/project-detail-page";
import {DataProvider} from "../providers/data-provider";
import {IonicStorageModule} from "@ionic/storage";
import {CreateTaskPage} from "../pages/create-task-page/create-task-page";
import {ProjectsProvider} from "../providers/projects-provider";
import {TasksProvider} from "../providers/tasks-provider";
import {TasksMapper} from "../providers/tasks-mapper";
import {UUID} from "angular2-uuid";
import {FilteredTasksPage} from "../pages/filtered-tasks-page/filtered-tasks-page";
import {EditTaskPage} from "../pages/edit-task-page/edit-task-page";
import {ColorPage} from "../pages/color-page/color-page";

@NgModule({
  declarations: [
    MyApp,
    ProjectsPage,
    FiltersPage,
    CreateProjectPage,
    ProjectDetailPage,
    CreateTaskPage,
    FilteredTasksPage,
    TabsPage,
    EditTaskPage,
    ColorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top', tabsHideOnSubPages: true}),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjectsPage,
    FiltersPage,
    CreateProjectPage,
    ProjectDetailPage,
    CreateTaskPage,
    TabsPage,
    FilteredTasksPage,
    ColorPage,
    EditTaskPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataProvider,
    ProjectsProvider,
    TasksProvider,
    TasksMapper,
    UUID,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
