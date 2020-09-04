import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// ----> Import PdfJsViewerModule here
import { PdfJsViewerModule } from "ng2-pdfjs-viewer";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatMenuModule } from "@angular/material/menu";
import { MatInputModule } from "@angular/material/input";
import { SharedModule } from "./SharedComponents/shared.module";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { PdfserviceService } from "./Services/pdfservice.service";
import { HttpClientModule } from "@angular/common/http";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCheckboxModule } from "@angular/material/checkbox";
const MATERIAL_IMPORTS = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatButtonModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...MATERIAL_IMPORTS,
    // ----> Import PdfJsViewerModule here
    PdfJsViewerModule,
    MatGridListModule,
    MatTableModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    SharedModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatCheckboxModule,
  ],
  exports: [],
  providers: [PdfserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
