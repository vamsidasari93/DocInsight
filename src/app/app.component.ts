import { Component, ViewChild } from "@angular/core";
import { PdfserviceService } from "./Services/pdfservice.service";
import { User, Role } from "./_models";
import { AuthenticationService } from "./_services";
import { Router } from "@angular/router";

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
  currentUser: User;
  module: boolean;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  ngOnInit() {}
  get isAdmin() {
    if (this.currentUser && this.currentUser.role === Role.Admin) {
      this.module = true;
      return this.currentUser && this.currentUser.role === Role.Admin;
    } else {
      this.module = false;
      return this.currentUser && this.currentUser.role === Role.User;
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
