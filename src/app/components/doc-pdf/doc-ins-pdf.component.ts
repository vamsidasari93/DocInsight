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
  totalPages: any;
  segementCount: any;
  segmentArray = [];
  panelOpenState = false;
  icon: boolean = false;
  clasuesObject = [];
  totalCount = 0;
  segments = [
    { name: "Payment Terms", id: 1, count: 0, pg: [] },
    { name: "Price variation", id: 2, count: 0, pg: [] },
    { name: "Permissions/Rows", id: 3, count: 0, pg: [] },
    { name: "Terminations", id: 4, count: 0, pg: [] },
    { name: "Dispute Resolution", id: 5, count: 0, pg: [] },
    { name: "Force majeure", id: 6, count: 0, pg: [] },
  ];
  constructor(
    private el: ElementRef,
    private renderer: Renderer,
    private PdfserviceService: PdfserviceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reduce();
    this.PdfserviceService.annotation("DocInsight");
    this.activatedRoute.params.subscribe((id: Params) => {
      this.id = id;
    });

    this.getMaterialPdf();
    this.segementshow();
  }
  click() {
    this.icon = !this.icon;
  }
  reduce() {
    var retrievedObject = localStorage.getItem("clasues_object");
    var list = JSON.parse(retrievedObject);
    this.clasuesObject = list;

    list.reduce((repeatItem, x) => {
      repeatItem[x.segmentId] = (repeatItem[x.segmentId] || 0) + 1;
      this.segementCount = repeatItem;
      return repeatItem;
    }, {});
    for (let x in this.segementCount) {
      this.segments.forEach((segment) => {
        if (segment.id === parseInt(x)) {
          segment.count = this.segementCount[x];
        }
      });
    }
    let groupByPages = [];
    this.clasuesObject.forEach(function (a) {
      groupByPages[a.segmentId] = groupByPages[a.segmentId] || [];
      groupByPages[a.segmentId].push({
        pageNo: a.pageNo,
        segmentId: a.segmentId,
      });
    });
    //  groupByPages.forEach(function (a) {
    for (let i = 1; i < groupByPages.length; i++) {
      let mymap = new Map();
      let unique = groupByPages[i].filter((el) => {
        const val = mymap.get(el.pageNo);
        if (val) {
          if (el.segmentId < val) {
            mymap.delete(el.pageNo);
            mymap.set(el.pageNo, el.segmentId);
            return true;
          } else {
            return false;
          }
        }
        mymap.set(el.pageNo, el.segmentId);
        return true;
      });
      groupByPages[i] = unique;
    }
    //  });
    for (let x in groupByPages) {
      this.segments.forEach((segment) => {
        if (segment.id === parseInt(x)) {
          segment.pg = groupByPages[x];
          this.totalCount = this.totalCount + segment.pg.length;
        }
      });
    }
    this.PdfserviceService.Annonationcount(this.totalCount); //data passing through header count
  }

  segementshow() {
    this.segmentShow = true;
    this.PdfserviceService.segemnets$.subscribe((val) => {
      this.segmentShow = val;
    });
  }
  // close() {
  //   this.segmentShow = false;
  // }
  public testBeforePrint() {
    // console.log("testBeforePrint() successfully called");
    // console.log(this.bigPdfViewer.page);
    this.bigPdfViewer.page = 3;
    // console.log(this.bigPdfViewer.page);
  }

  public testAfterPrint() {
    console.log("testAfterPrint() successfully called");
  }

  public testPagesLoaded(count: number) {
    this.totalPages = +count;
    let pagelive = this.bigPdfViewer.page;
    this.PdfserviceService.pageDetail(this.totalPages, pagelive);
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
