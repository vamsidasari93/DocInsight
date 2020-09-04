import { Component, OnInit, ViewChild } from "@angular/core";
import { PdfserviceService } from "src/app/Services/pdfservice.service";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

let TABLE_DATA: [];

@Component({
  selector: "app-documents",
  templateUrl: "./documents.component.html",
  styleUrls: ["./documents.component.scss"],
})
export class DocumentsComponent implements OnInit {
  pdfFiles: any;
  pdfData: any;
  checked: any;
  selection: any;
  searchValue: any;
  public displayedColumns: string[] = [
    "select",
    "Tender Description",
    "Pages",
    "Business Unit",
    "Uploaded on",
    "Uploaded by",
    "client",
    "Annotations",
    "Action",
  ];
  dataSource = new MatTableDataSource(TABLE_DATA);
  @ViewChild(MatPaginator, { static: false }) set content(
    paginator: MatPaginator
  ) {
    this.dataSource.paginator = paginator;
  }

  // @ViewChild(MatSort, { static: false }) set contentValue(sort: MatSort) {
  //   this.dataSource.sort = sort;
  // }
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    private PdfserviceService: PdfserviceService,
    private router: Router
  ) {
    this.PdfserviceService.annotation("Document");
  }

  ngOnInit() {
    this.checkToggle();
    this.pdffile();
    this.PdfserviceService.searchValue$.subscribe((val) => {
      this.searchValue = val;
      const filterValue = this.searchValue;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      console.log("finding", this.searchValue);
    });
  }
  pdffile() {
    this.PdfserviceService.getMaterialPdf().subscribe((tabledata) => {
      this.pdfFiles = tabledata;
      this.pdfData = this.pdfFiles.pdfFiles;
      TABLE_DATA = this.pdfData;
      this.dataSource = new MatTableDataSource(TABLE_DATA);
      this.dataSource.sort = this.sort;
      this.selection = new SelectionModel(true, []);
      // console.log(this.dataSource.paginator);

      // this.dataSource.paginator = this.paginator;
    });
  }
  updateRowData(row_obj) {
    // this.dataSource = this.dataSource.filter((value, key) => {
    //   if (value.id == row_obj.id) {
    //     value.name = row_obj.name;
    //   }
    //   return true;
    // });
  }
  deleteRowData(row_obj) {
    // this.dataSource = this.dataSource.filter((value, key) => {
    //   return value.id != row_obj.id;
    // });
  }
  DocumentClick(e, id, filename) {
    this.router.navigate(["/DocInsight", { id: id }]);
    // this.PdfserviceService.annotation("Document");
  }

  checkToggle() {
    this.PdfserviceService.subj$.subscribe((val) => {
      this.checked = val;
      console.log(this.checked);
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.position + 1
    }`;
  }
}
