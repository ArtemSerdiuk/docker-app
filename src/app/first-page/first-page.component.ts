import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {
  public title = 'First Page';

  constructor(
    private router: Router,
  ) {
  }

  public goToHomePage(): void {
    this.router.navigate(['/home-page']);
  }
}
