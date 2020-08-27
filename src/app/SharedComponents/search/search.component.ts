import { Component, OnInit, ChangeDetectorRef, Output } from "@angular/core";
import { EventEmitter } from "protractor";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  searchValue: string;
  // @Input() title: any;
  // @Output() search = new EventEmitter();
  // @Output() searchTextEmitter: EventEmitter<string> = new EventEmitter<string>();
  // @Output() resetData: EventEmitter<string> = new EventEmitter<string>();
  speechToText: string;
  constructor(private cd: ChangeDetectorRef) {}
  keyup(event) {
    this.searchValue = event;
    // this.search.emit(this.searchValue);
  }

  ngOnInit() {}
}
