import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { DocumentsComponent } from "./documents/documents.component";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SearchComponent } from "./search/search.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { MatSortModule } from "@angular/material/sort";
import { MatSelectModule } from "@angular/material/select";
import { MatPaginatorModule } from "@angular/material/paginator";

//import { PdfserviceService } from "../components/doc-pdf/pdfservice.service";
const routes: Routes = [
  {
    path: "",
    component: DocumentsComponent,
  },
];

@NgModule({
  declarations: [DocumentsComponent, SearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule,
  ],
  // providers: [PdfserviceService],
  exports: [SearchComponent, MatSortModule],
})
export class SharedModule {}
