import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  Clocks = [{'time': 1537907924476, 'description': 'Ohad need to suk my di**'},{'time': 1537907925576, 'description': 'Zballa need to do somthing whit my di**'}]



  getTime(milsec){
    let a = new Date()
    a.setTime(milsec)
    return a.toLocaleString()
  }

  ClockDate(date){
    console.log(date)
  }
}