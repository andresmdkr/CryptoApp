import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacryptosComponent } from './lista-cryptos.component';

describe('ListacryptosComponent', () => {
  let component: ListacryptosComponent;
  let fixture: ComponentFixture<ListacryptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacryptosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListacryptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
