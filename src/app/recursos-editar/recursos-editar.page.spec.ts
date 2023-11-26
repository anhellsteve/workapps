import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecursosEditarPage } from './recursos-editar.page';

describe('RecursosEditarPage', () => {
  let component: RecursosEditarPage;
  let fixture: ComponentFixture<RecursosEditarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecursosEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
