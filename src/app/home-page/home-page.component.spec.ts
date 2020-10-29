import { HomePageComponent } from './home-page.component';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let h1: HTMLElement;
  const routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });

  it('#goToFirstPage() should redirect to FirstPageComponent', () => {
    component.goToFirstPage();
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/first-page']);
  });
});
