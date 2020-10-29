import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  public title = 'Home Page';

  constructor(
    private router: Router,
  ) {
  }

  public goToFirstPage(): void {
    this.router.navigate(['/first-page']);
  }
}
