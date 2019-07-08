import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ScrollableTabComponent,
  ImageSliderComponent,
  HorizontalGridComponent
} from './components';
import {
  GridItemDirective,
  GridItemImageDirective,
  GridItemTitleDirective,
  TagDirective
} from './directives';
import { AgoPipe } from './pipes/ago.pipe';
import { CountDownComponent } from './components/count-down';
import { FooterComponent } from './components/footer';
import { VerticalGridComponent } from './components/vertical-grid';
import { ProductCardComponent } from './components/product-card';
import { AvatarDirective } from './directives/avatar.directive';

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    TagDirective,
    AvatarDirective,
    AgoPipe
  ]
})
export class SharedModule {}
