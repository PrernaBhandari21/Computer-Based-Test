import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Computer-Based-Test';

  showHeaderSidemenu: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  isLoggedIn: boolean =false;
  
  
  // {
  //   // Example: Check if the user is logged in based on a login status variable
  //   // return this.isLoggedInVariable;
  //   return false; // Replace with your logic
  // }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const routeData = this.activatedRoute.firstChild?.snapshot.data;
        this.showHeaderSidemenu = !routeData || routeData['showHeaderSidemenu'] !== false;
      }
    });
  }

}
