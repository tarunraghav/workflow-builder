import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvEditorComponent } from './csv-editor.component';

describe('CsvEditorComponent', () => {
  let component: CsvEditorComponent;
  let fixture: ComponentFixture<CsvEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
