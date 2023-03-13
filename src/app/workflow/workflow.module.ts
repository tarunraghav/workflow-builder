import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch/branch.component';
import { CsvReaderComponent } from './csv-reader/csv-reader.component';
import { CsvEditorComponent } from './csv-editor/csv-editor.component';
import { BooleanComponent } from './boolean/boolean.component';
import { HttpClientComponent } from './http-client/http-client.component';
import { DataMapperComponent } from './data-mapper/data-mapper.component';



@NgModule({
  declarations: [
    BranchComponent,
    CsvReaderComponent,
    CsvEditorComponent,
    BooleanComponent,
    HttpClientComponent,
    DataMapperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WorkflowModule { }
