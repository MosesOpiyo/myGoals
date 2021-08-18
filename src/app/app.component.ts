import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ['My goals']
  goals: string[]

  constructor () {
    this.goals = ['Watch Tv','buy a new phone','get a new watch']
  }
}
