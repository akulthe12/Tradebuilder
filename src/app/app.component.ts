import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tradebuilder';
  showFooter: boolean = true;

  constructor(private router: Router) {
    // Listen to routing events
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Check if the current route is 'login'
      this.showFooter = !(event.urlAfterRedirects.includes('/login'));
    });
  }
  }

