import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselCircularDemo } from '@app/carousel/carousel.component';

@Component({
  selector: 'app-home',
  imports: [CarouselCircularDemo, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
