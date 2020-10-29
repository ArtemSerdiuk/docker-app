import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstPageComponent } from './first-page.component';

describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<FirstPageComponent>;
  let h1: HTMLElement;
  const routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPageComponent ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });
    fixture = TestBed.createComponent(FirstPageComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });

  it('#clicked() should should redirect to HomePageComponent', () => {
    component.goToHomePage();
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/home-page']);
  });
});
