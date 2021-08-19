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
    new Goal(1,'watch tv','lots of tv'),
    new Goal(2,'buy a new phone','samsung or Iphone'),
    new Goal(3,'get a new watch','a rolex or a patek')
   ]

  constructor() { }

  ngOnInit() {
  }

}
