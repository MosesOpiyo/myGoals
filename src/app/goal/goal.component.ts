import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { ServicesService } from '../goal-service/services.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  title = 'My Goals'
  goals: Goal[]
   

    toggleDetails(index){
      this.goals[index].showDescription = !this.goals[index].showDescription;
    }
    completeGoal(isComplete, index) {
      if (isComplete) {
        this.goals.splice(index,1);
      }
    }
  

  constructor(mygoals:ServicesService) {
    this.goals= mygoals.getList()
   }

  ngOnInit() {
  }

}
