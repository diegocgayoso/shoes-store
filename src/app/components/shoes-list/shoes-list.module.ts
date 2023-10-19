import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ShoesListComponent } from './shoes-list.component';



@NgModule({
  declarations: [
    CardComponent,
    CardListComponent,
    NavigationBarComponent,
    SearchBarComponent,
    ShoesListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ShoesListModule { }
