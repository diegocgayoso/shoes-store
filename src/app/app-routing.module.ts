import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewShoeComponent } from './components/view-shoe/view-shoe.component';
import { ShoesListComponent } from './components/shoes-list/shoes-list.component';

const routes: Routes = [
  {
    path: "",
    component: ShoesListComponent
  },
  {
    path: 'view-shoes',
    component: ViewShoeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
