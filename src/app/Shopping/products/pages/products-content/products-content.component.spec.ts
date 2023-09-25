import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsContentComponent } from './products-content.component';

describe('ProductsContentComponent', () => {
  let component: ProductsContentComponent;
  let fixture: ComponentFixture<ProductsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsContentComponent]
    });
    fixture = TestBed.createComponent(ProductsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
