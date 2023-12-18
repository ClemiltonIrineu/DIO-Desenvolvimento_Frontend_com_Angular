import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoticiaComponent } from './page-noticia.component';

describe('PageNoticiaComponent', () => {
  let component: PageNoticiaComponent;
  let fixture: ComponentFixture<PageNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
