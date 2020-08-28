import { Component, ViewChild } from "@angular/core";
import { PdfserviceService } from "./Services/pdfservice.service";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "app";
  page: number;
  searchValue: string;
  checked: boolean;

  @ViewChild("externalPdfViewer", { static: true }) public externalPdfViewer;
  @ViewChild("embeddedPdfViewer", { static: true }) public embeddedPdfViewer;
  // @ViewChild("SearchValue", { static: true }) public SearchValue;
  constructor(private pdfService: PdfserviceService) {}
  searchComponent(search) {
    this.searchValue = search;
  }

  ngOnInit() {
    // this.pdfService.subject.next([
    //   {
    //     checked: true,
    //   },
    // ]);
  }

  public openPdf() {
    console.log("opening pdf in new tab!");
    this.externalPdfViewer.pdfSrc = "compressed.pdf";
    this.externalPdfViewer.refresh();
  }

  public changePdf() {
    console.log("Changing pdf viewer url!");
    this.embeddedPdfViewer.pdfSrc = "compressed.pdf";
    this.embeddedPdfViewer.refresh();
  }
  onKey(e) {
    let searchvalue = e.target.value;
    this.pdfService.searchvalue(searchvalue);
  }
  changed() {
    var checkValue = this.checked;
    console.log(checkValue);
    this.pdfService.send(checkValue);
  }
}
