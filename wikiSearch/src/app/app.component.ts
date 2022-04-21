import { Component } from '@angular/core';
import { tap, Observable } from 'rxjs';
import { Article, SeachService } from './pages/search/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  articles$!:Observable<Article[]>;



  constructor(private readonly searchSvc: SeachService){



  }


  onSearch(term: string) :void{
    //console.log('desde app'+ term)
    this.articles$ = this.searchSvc.buscar(term);
    /* this.searchSvc.buscar(term)
    .pipe(
      tap(res => console.log(res))
    )
    .subscribe(); */

  }

}
