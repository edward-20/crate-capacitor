import { Injectable } from '@angular/core';
import { Observable, bufferCount, from, map, mergeMap, of, zip } from 'rxjs';
import { Album } from './album';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private http: HttpClient) { }

  private apiUrl = " https://dog.ceo/api/breeds/image/random"

  // plan: two observables, one outputting albums, the other outputting album covers (dog images)
  // then create an observable that mergeMaps (python zip) 
  // [then aggregate it somehow]
  private getAlbumWithoutCovers(): Observable<Album> {
    const data = [
      {"artist":"Demetris Winny","title":"Blick, Fritsch and Wolf","date": new Date("9/28/2024")},
      {"artist":"Ilse Giamitti","title":"Schmeler and Sons","date": new Date("3/2/2024")},
      {"artist":"Norrie Seeman","title":"Cartwright-Gorczany","date": new Date("5/23/2024")},
      {"artist":"Flor Davidsen","title":"Flatley-Streich","date": new Date("9/14/2024")},
      {"artist":"Munmro Lemerie","title":"Daugherty-Cummerata","date": new Date("5/30/2024")},
      {"artist":"Tobias Dreus","title":"Rau, Cummerata and Reichel","date": new Date("12/12/2024")},
      {"artist":"Amabel Coniam","title":"Gerlach, Hackett and Jacobi","date": new Date("4/24/2024")},
      {"artist":"Addi Gomer","title":"Kuphal, Macejkovic and Zboncak","date": new Date("5/14/2024")},
      {"artist":"Brandi Marchment","title":"Sipes, Kutch and Stiedemann","date": new Date("6/7/2024")},
      {"artist":"Adolpho Tevelov","title":"Bashirian Group","date": new Date("10/1/2024")},
    ]
    return from(data)
  }

  private getAlbumCover(): Observable<string> {
    return this.http.get<{message: string}>(this.apiUrl).pipe(
      map(payload => payload.message)
    )
  }

  private getSingleAlbum(): Observable<Album> {
    const albumsWithout = this.getAlbumWithoutCovers()
    return albumsWithout.pipe(
      mergeMap(album => 
        this.getAlbumCover().pipe(
          map(cover => ({...album, cover}))
        )
      )
    )
  }


  public getAlbums(): Observable<Album[]> {
    return this.getSingleAlbum().pipe(
      bufferCount(10)
    )
  }

}
