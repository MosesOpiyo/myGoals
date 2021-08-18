import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  title = 'My Goals'
   goals:Goal[]=[
    {id:1,name:'watch tv'},
    {id:2,name:'buy a new phone'},
    {id:3,name:'get a new watch'}
   ]

  constructor() { }

  ngOnInit() {
  }

}
