import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelemptioComponent } from './celemptio.component';

describe('CelemptioComponent', () => {
  let component: CelemptioComponent;
  let fixture: ComponentFixture<CelemptioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelemptioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelemptioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
