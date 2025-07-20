import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotactFormComponent } from './cotact-form.component';

describe('CotactFormComponent', () => {
  let component: CotactFormComponent;
  let fixture: ComponentFixture<CotactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CotactFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
