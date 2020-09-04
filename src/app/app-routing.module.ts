import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "DocInsight",
    loadChildren: () =>
      import("./components/doc-pdf/doc-pdf.module").then((m) => m.DocPDfModule),
  },
  {
    path: "Documents",
    loadChildren: () =>
      import("./SharedComponents/shared.module").then((m) => m.SharedModule),
  },

  { path: "", redirectTo: "/Documents", pathMatch: "full" },
  { path: "**", redirectTo: "/Documents", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
