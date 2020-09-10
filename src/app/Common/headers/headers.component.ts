import { Component, OnInit } from "@angular/core";
import { PdfserviceService } from "src/app/Services/pdfservice.service";

@Component({
  selector: "headers",
  templateUrl: "./headers.component.html",
  styleUrls: ["./headers.component.scss"],
})
export class HeadersComponent implements OnInit {
  page: number;
  searchValue: string;
  checked: boolean;
  annotation: boolean;
  pdfFilename: any;
  segemnts: any;
  annonatationCountvalue: any;
  annontationchecked = false;
  constructor(private pdfService: PdfserviceService) {
    this.pdfService.pageDetail$.subscribe((val) => {
      let detailspage = val;
      console.log(detailspage);
    });
  }
  searchComponent(search) {
    this.searchValue = search;
  }
  ngOnInit() {
    this.find();
    this.annonatationCount();
    this.pdfService.pdfName$.subscribe((val) => {
      this.pdfFilename = val;
    });
  }

  annonatationCount() {
    this.pdfService.Annonationcount$.subscribe((val) => {
      this.annonatationCountvalue = val;
    });
  }

  find() {
    // this.annotation = true;
    this.pdfService.annatation$.subscribe((val) => {
      if (val === "DocInsight") {
        this.annotation = false;
      } else {
        this.annotation = true;
      }
    });
  }
  annotationCount() {
    this.annontationchecked = true;
    this.segemnts = !this.segemnts;
    this.pdfService.segemnets(this.segemnts);
  }
  reviewAnntation() {
    this.annontationchecked = false;
    this.segemnts = false;
    this.pdfService.segemnets(this.segemnts);
    console.log(this.annontationchecked);
  }
  // public openPdf() {
  //   console.log("opening pdf in new tab!");
  //   this.externalPdfViewer.pdfSrc = "compressed.pdf";
  //   this.externalPdfViewer.refresh();
  // }

  // public changePdf() {
  //   console.log("Changing pdf viewer url!");
  //   this.embeddedPdfViewer.pdfSrc = "compressed.pdf";
  //   this.embeddedPdfViewer.refresh();
  // }
  onKey(e) {
    let searchvalue = e.target.value;
    this.pdfService.searchvalue(searchvalue);
  }
  changed() {
    var checkValue = this.checked;
    this.pdfService.send(checkValue);
  }
}
