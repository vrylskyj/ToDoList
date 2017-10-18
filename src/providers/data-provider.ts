import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {
  }

  getData(key){
    return this.storage.get(key);
  }

  save(data, key){
    this.storage.set(key, data);
  }

}
