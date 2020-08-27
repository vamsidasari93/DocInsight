import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BigComponent } from "./big/big.component";
import { DynamicComponent } from "./dynamic/dynamic.component";
import { InlineComponent } from "./inline/inline.component";

const routes: Routes = [
  { path: "big", component: BigComponent },
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
  { path: "inline", component: InlineComponent },
  { path: "dynamic", component: DynamicComponent },
  { path: "", redirectTo: "/DocInsight", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
