import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer,
  HostListener,
} from "@angular/core";

@Component({
  selector: "app-doc-ins-pdf",
  templateUrl: "./doc-ins-pdf.component.html",
  styleUrls: ["./doc-ins-pdf.component.scss"],
})
export class DocInsPdfComponent implements OnInit {
  @ViewChild("bigPdfViewer", { static: true }) public bigPdfViewer;
  pdfMaterial: any;
  constructor(private el: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    // this.getMaterialPdf();
  }

  public testBeforePrint() {
    console.log("testBeforePrint() successfully called");
    console.log(this.bigPdfViewer.page);
    this.bigPdfViewer.page = 3;
    console.log(this.bigPdfViewer.page);
  }

  public testAfterPrint() {
    console.log("testAfterPrint() successfully called");
  }

  public testPagesLoaded(count: number) {
    console.log(
      "testPagesLoaded() successfully called. Total pages # : " + count
    );
  }

  public testPageChange(pageNumber: number) {
    console.log(
      "testPageChange() successfully called. Current page # : " + pageNumber
    );
  }
  Paragraph(e) {
    console.log("click", e.target.value);
  }
  // getMaterialPdf() {
  //   this.PdfserviceService.getMaterialPdf().subscribe((data) => {
  //     this.pdfMaterial = data;
  //     console.log("hello", this.pdfMaterial);
  //   });
  // }
}
