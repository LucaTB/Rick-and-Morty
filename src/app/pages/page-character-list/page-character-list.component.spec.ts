import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCharacterListComponent } from './page-character-list.component';

describe('PageCharacterListComponent', () => {
  let component: PageCharacterListComponent;
  let fixture: ComponentFixture<PageCharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCharacterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
