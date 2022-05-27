import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraianLoginComponent } from './libraian-login.component';

describe('LibraianLoginComponent', () => {
  let component: LibraianLoginComponent;
  let fixture: ComponentFixture<LibraianLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraianLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraianLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
