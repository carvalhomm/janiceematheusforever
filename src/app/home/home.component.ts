import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public anos = '';
  public meses = '';
  public dias = '';
  public tempoRestante = '';
  constructor(private router: Router) { }

  ngOnInit() {
    // this.tempoJuntos = moment(new Date(2020, 7, 12)).fromNow(true);
    this.anos = `${Math.ceil(moment.duration(moment(new Date(2020, 5, 12)).diff(moment())).asYears()) * -1}`;
    this.meses = `${Math.ceil(moment.duration(moment(new Date(2020, 5, 12)).diff(moment())).asMonths()) * -1}`;
    this.dias = `${Math.ceil(moment.duration(moment(new Date(2020, 5, 12)).diff(moment())).asDays()) * -1}`;
    this.timeLeftUntilNextBirthday();
  }

  public timeLeftUntilNextBirthday() {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 5, 12);
    if (today.getMonth() == 5 && today.getDate() > 12) {
      birthday.setFullYear(birthday.getFullYear() + 1); 
    }
    const one_day=1000*60*60*24;
    this.tempoRestante = Math.ceil((birthday.getTime()-today.getTime())/(one_day)) + ' dias restantes até o nosso próximo aniversário';
  }

  public takeToSpotify() {
    this.router.navigate(['/music-player']);
  }

}
