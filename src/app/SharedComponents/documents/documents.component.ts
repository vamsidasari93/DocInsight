import { Component, OnInit } from "@angular/core";
import { PdfserviceService } from "src/app/Services/pdfservice.service";

@Component({
  selector: "app-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.scss"],
})
export class DocumentsComponent implements OnInit {
  cards = [1, 2, 3, 4, 5];
  pdfFiles: any;
  pdfData: any;
  constructor(private PdfserviceService: PdfserviceService) {}

  ngOnInit() {
    this.pdffile();
  }
  pdffile() {
    this.PdfserviceService.getMaterialPdf().subscribe((data) => {
      this.pdfFiles = data;
      this.pdfData = this.pdfFiles.pdfFiles;
      console.log(this.pdfData);
    });
  }
}
