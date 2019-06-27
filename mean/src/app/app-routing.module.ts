import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddbookComponent } from "./component/addbook/addbook.component";
import { ResultComponent } from "./component/result/result.component";

const routes: Routes = [
  {
    path: "",
    component: AddbookComponent
  },
  { path: "edit", component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
