import { Component } from '@angular/core';

import { fadeAnimation } from './../../animations';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css'],
  animations: [fadeAnimation]
})
export class AppLayoutComponent { }
