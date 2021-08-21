import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  title = 'My Goals'
    goals: Goal[] = [
      new Goal(1, 'Watch TV', 'lots and lots of TV'),
      new Goal(2,'Buy Cookies','I have to buy cookies for the parrot'),
      new Goal(3,'Get new Phone','Maybe a samsung or an Iphone'),
      new Goal(4,'Get Dog Food','Pupper likes expensive snacks'),
      new Goal(5,'Solve math homework','Damn Math'),
      new Goal(6,'Plan my days plan','Still dont know what i will do'),
    ];

    toggleDetails(index){
      this.goals[index].showDescription = !this.goals[index].showDescription;
    }
    completeGoal(isComplete, index) {
      if (isComplete) {
        this.goals.splice(index,1);
      }
    }
  

  constructor() { }

  ngOnInit() {
  }

}
