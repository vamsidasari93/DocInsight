import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login";
import { AuthGuard } from "./_helpers";
import { Role } from "./_models";

const routes: Routes = [
  {
    path: "Dashboard",
    loadChildren: () =>
      import("./components/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "DocInsight",
    loadChildren: () =>
      import("./components/doc-pdf/doc-pdf.module").then((m) => m.DocPDfModule),
    canActivate: [AuthGuard],
  },
  {
    path: "Documents",
    loadChildren: () =>
      import("./SharedComponents/shared.module").then((m) => m.SharedModule),
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    component: LoginComponent,
  },

  {
    path: "",
    redirectTo: "Documents",
    pathMatch: "full",
    canActivate: [AuthGuard],
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
