import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

interface ITab {
  title: string;
  content: string;
  removable?: boolean;
  disabled?: boolean;
  active?: boolean;
  customClass?: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  standalone: true,
  imports: [
    AboutComponent,
    CommonModule,
    ContactComponent,
    HomeComponent,
    RouterOutlet,
    RouterLink,
    RouterModule,
    TabsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  routerActive: any;
  title = 'ngx-bootstrap';

  tabs: ITab[] = [
    {
      title: 'Home',
      content: 'Home',
      customClass: 'customClass'
    },
    {
      title: 'Contact',
      content: 'Contact',
      customClass: 'customClass'
    },
    {
      title: 'About',
      content: 'About',
      customClass: 'customClass'
    }
  ];
rla1: any;
rla2: any;
rla3: any;
}
