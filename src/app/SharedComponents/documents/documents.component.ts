import { Component, OnInit } from "@angular/core";
import { PdfserviceService } from "src/app/Services/pdfservice.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.scss"],
})
export class DocumentsComponent implements OnInit {
  pdfFiles: any;
  pdfData: any;
  constructor(
    private PdfserviceService: PdfserviceService,
    private router: Router
  ) {}

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
  DocumentClick(e, id, filename) {
    // console.log(id, filename);
    this.router.navigate(["/DocInsight", { id: id }]);
  }
}
