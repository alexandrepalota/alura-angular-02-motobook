import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPhotosBikesComponent } from './grid-photos-bikes.component';

describe('GridPhotosBikesComponent', () => {
  let component: GridPhotosBikesComponent;
  let fixture: ComponentFixture<GridPhotosBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPhotosBikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPhotosBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
