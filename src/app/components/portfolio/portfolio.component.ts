import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from 'src/app/theme-service.service';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  isActive: boolean;

  constructor(private themeService: ThemeServiceService) { }

  ngOnInit(): void {
    this.themeService.isActive$.subscribe(val => this.isActive = val);
  }

}
