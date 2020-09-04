import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer,
  HostListener,
} from "@angular/core";
import { PdfserviceService } from "src/app/Services/pdfservice.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-doc-ins-pdf",
  templateUrl: "./doc-ins-pdf.component.html",
  styleUrls: ["./doc-ins-pdf.component.scss"],
})
export class DocInsPdfComponent implements OnInit {
  @ViewChild("viewer", { static: true }) public bigPdfViewer;
  pdfMaterial: any;
  id: any;
  filterData: any;
  searchSegment: any;
  segmentShow: any;
  segments: string[] = [
    "Payment Terms",
    "Price variation",
    "Permissions/Rows",
    "Terminations",
    "Dispute Resolution",
    "Force majeure",
  ];
  constructor(
    private el: ElementRef,
    private renderer: Renderer,
    private PdfserviceService: PdfserviceService,
    private activatedRoute: ActivatedRoute
  ) {
    this.PdfserviceService.annotation("DocInsight");
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((id: Params) => {
      this.id = id;
    });

    this.getMaterialPdf();
    this.segementshow();
  }
  segementshow() {
    this.PdfserviceService.segemnets$.subscribe((val) => {
      this.segmentShow = val;
      console.log(this.segmentShow);
    });
  }
  close() {
    this.segmentShow = false;
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
  getMaterialPdf() {
    this.PdfserviceService.getMaterialPdf().subscribe((data) => {
      this.pdfMaterial = data;
      let pdfData = this.pdfMaterial.pdfFiles;
      let index = pdfData.findIndex((x) => x.id === parseInt(this.id.id));
      this.filterData = pdfData[index];
      console.log(this.filterData.fileName);
      var pdfName = this.filterData.fileName;
      this.PdfserviceService.pdfName(pdfName);
    });
  }
}
