import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from 'src/app/theme-service.service';

@Component({
  selector: 'testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  isActive: boolean;

  constructor(private themeService: ThemeServiceService) { }

  ngOnInit(): void {
    this.themeService.isActive$.subscribe(val => this.isActive = val);
  }

}
