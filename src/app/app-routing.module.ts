import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AboutComponent } from './pages/about/about.component';
import { ReportComponent } from './pages/report/report.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { MoreComponent } from './pages/more/more.component';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "about", component: AboutComponent },
  { path: "report", component: ReportComponent },
  { path: "aboutUS", component: AboutUsComponent },
  { path: "more", component: MoreComponent },
  { path: " ", redirectTo: '/main', pathMatch: 'full' },
  { path: "**", redirectTo: "main" }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
