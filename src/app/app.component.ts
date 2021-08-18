import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ['My goals']
  goals: Goal[]=[
    {id:1,name:'watch tv'},
    {id:2,name:'buy a new phone'},
    {id:3,name:'get a new watch'}
  ]

  constructor () {
    this.goals = []
  }
}
