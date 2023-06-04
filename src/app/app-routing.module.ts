import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LinkAddComponent } from './link-add/link-add.component';

const routes: Routes = [
  {path: "",  redirectTo: "main", pathMatch: "full"},
  {path: "linkAdd", component: LinkAddComponent},
  {path: "main", component: MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
