import { Component, ViewChild } from "@angular/core";

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
  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" },
  ];
  @ViewChild("externalPdfViewer", { static: true }) public externalPdfViewer;
  @ViewChild("embeddedPdfViewer", { static: true }) public embeddedPdfViewer;

  searchComponent(search) {
    this.searchValue = search;
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
}
