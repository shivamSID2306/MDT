import { Component, OnInit } from '@angular/core';
import { faGlobe, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  faGlobe = faGlobe;
  faEnvelope = faEnvelope;
  faPhone = faPhoneAlt;

  ngOnInit(): void {
  }

}
