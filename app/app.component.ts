import {Component}           from '@angular/core';
import {AlertComponent }     from 'ng2-bootstrap/ng2-bootstrap';
import {NgModel}             from '@angular/forms';

import { DATA }              from './app.data';
import { General_data }      from './general_data/general_data';

@Component({
  selector: 'my-app',
  template: `

      <my_header [general_data]="_general_data"></my_header>

      <input [(ngModel)]="D.login"    type="text"     placeholder="Username" name="username" value="Login"> <br>
      <input [(ngModel)]="D.password" type="password" placeholder="Password" name="password" value="Mouse"> <br>

      <button type="button" class="btn btn-primary btn-sm"
          (click)="login()"> Log in
      </button>


      <pre> Selected date is: <em *ngIf="dt">{{ getDate() | date:'fullDate'}}</em></pre>

      <h4> Inline </h4>

      <div style="display:inline-block; min-height:290px;">
        <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true"></datepicker>
      </div>
  `
})

export class AppComponent {
  D: any = {};
  _general_data: any = {
    id:   1,
    name: 1
  }
  public dt:Date = new Date();
  private minDate:Date = null;
  private events:Array<any>;
  private tomorrow:Date;
  private afterTomorrow:Date;
  private formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
  private format = this.formats[0];
  private dateOptions:any = {
    formatYear: 'YY',
    startingDay: 1
  };

  public getDate():number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }
  
  login() {

  }
      ngOnInit() {
        console.log('The2 model_reg1');
        console.log(DATA);
      }
}