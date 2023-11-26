import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecursosDetallePage } from './recursos-detalle.page';

describe('RecursosDetallePage', () => {
  let component: RecursosDetallePage;
  let fixture: ComponentFixture<RecursosDetallePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecursosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
