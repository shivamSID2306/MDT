import { ThemeServiceService } from './../../theme-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  isActive: boolean;

  constructor(private themeService: ThemeServiceService) { }

  ngOnInit(): void {
    this.themeService.isActive$.subscribe(val => this.isActive = val)
  }
}
