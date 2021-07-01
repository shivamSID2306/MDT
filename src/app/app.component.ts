import { ThemeServiceService } from './theme-service.service';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MDT';
  isActive: boolean;

  constructor(private themeService: ThemeServiceService){}

  ngOnInit(){
    AOS.init();
    this.themeService.isActive$.subscribe(val => this.isActive = val)
  }
}
