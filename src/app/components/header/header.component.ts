import { ThemeServiceService } from './../../theme-service.service';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public themeService: ThemeServiceService) {}

  service: boolean;
  isActive: boolean = false;
  isCollapsed: boolean;
  currentPage: string;
  currentScrollVar: string;

  @HostListener('document:scroll')
  scrollfunction(){
    if(document.documentElement.scrollTop < 850){
      this.currentScrollVar = "home";
      this.currentPage = null;
    }
    else if(document.documentElement.scrollTop > 850 && document.documentElement.scrollTop < 2200){
      this.currentScrollVar = "services";
      this.currentPage = null;
    }
    else if(document.documentElement.scrollTop > 2200 && document.documentElement.scrollTop < 3150){
      this.currentScrollVar = "aboutUs";
      this.currentPage = null;
    }
    else if(document.documentElement.scrollTop > 3150 && document.documentElement.scrollTop < 3865){
      this.currentScrollVar = "portfolio";
      this.currentPage = null;
    }
    else if(document.documentElement.scrollTop > 3865 && document.documentElement.scrollTop < 4475){
      this.currentScrollVar = "testimonial";
      this.currentPage = null;
    }
    else if(document.documentElement.scrollTop > 4475){
      this.currentScrollVar = "contactUs";
      this.currentPage = null;
    }
    else{
      this.currentScrollVar = null;
    }
  }

  ngOnInit(): void {}

  services(){
    this.service = true
  }

  activate(){
    this.isActive = !this.isActive
  }
 
  changeTheme(){
    this.isActive = !this.isActive
    this.themeService.changeTheme(this.isActive)
  }

  activeItem(val: string){
    this.currentPage = val;
  }

  themeColor(val){
    if((this.isActive === false && this.currentPage === val) || (this.isActive === false && this.currentScrollVar === val)){
      return 'bright'
    }
    else if((this.isActive === true && this.currentPage === val) || (this.isActive === true && this.currentScrollVar === val))
      return 'deam';
    else
      return null;
    }
}


