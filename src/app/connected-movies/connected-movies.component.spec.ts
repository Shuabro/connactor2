import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedMoviesComponent } from './connected-movies.component';

describe('ConnectedMoviesComponent', () => {
  let component: ConnectedMoviesComponent;
  let fixture: ComponentFixture<ConnectedMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
