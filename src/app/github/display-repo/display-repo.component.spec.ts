import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayRepoComponent } from './display-repo.component';

describe('DisplayRepoComponent', () => {
  let component: DisplayRepoComponent;
  let fixture: ComponentFixture<DisplayRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayRepoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
