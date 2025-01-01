import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselCircularDemo } from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarouselCircularDemo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Crate';
}
