import { Injectable } from '@angular/core';
import { Goallist } from '../goal/goal';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  getList(){
    return Goallist
  }

  constructor() { }
}
