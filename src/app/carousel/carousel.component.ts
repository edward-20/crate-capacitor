import { Component, OnInit } from '@angular/core';

import { Album } from '@app/album/album';
import { AlbumService } from '@app/album/album.service';

import { Carousel } from 'primeng/carousel';

@Component({
    selector: 'carousel-circular-demo',
    templateUrl: './carousel.component.html',
    standalone: true,
    imports: [Carousel],
    providers: [AlbumService]
})
export class CarouselCircularDemo implements OnInit{
    albums: Album[] = [];

    responsiveOptions: any[] | undefined;

    constructor(private albumService: AlbumService) {}

    ngOnInit() {
        this.albumService.getAlbums().subscribe(data => {
            this.albums = data
            console.log(this.albums)
        });

        this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ]
    }
}