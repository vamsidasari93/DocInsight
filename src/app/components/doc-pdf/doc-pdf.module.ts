import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DocInsPdfComponent } from "./doc-ins-pdf.component";
import { PdfJsViewerModule } from "ng2-pdfjs-viewer";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
//import { PdfserviceService } from "./pdfservice.service";
const routes: Routes = [
  {
    path: "",
    component: DocInsPdfComponent,
  },
];

@NgModule({
  declarations: [DocInsPdfComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PdfJsViewerModule,
    MatGridListModule,
    MatTableModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  // providers: [PdfserviceService],
})
export class DocPDfModule {}
