import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { Observable,pluck } from "rxjs";
import { environment } from '../../../../environments/environment';

interface WikipediaResponse{
  query:{
    search:Article[]
  }
}

export interface Article{
  ns:number;
  title:string;
  pageid:number;
  size:number;
  wordcount:number;
  snippet:string;
  timestamp:Date;
}

@Injectable({providedIn:'root'})

export class SeachService{

  constructor(private readonly http:HttpClient){


  }

  buscar(term: string): Observable<Article[]>{
      const params = {
        action:'query', //lo indica la documentacion
        format:'json',
        list:'search',
        srsearch: term, //parametro a buscar
        utf8:'1',
        srlimit:20, //cantidad de resultados
        origin:'*' //esto lo agregamos para que no tire error de cors
    }

    //https://en.wikipedia.org/w/api.php
    return this.http.get<WikipediaResponse>(environment.api, {params})
    .pipe( //usamos este pipe para que solo traiga lo que esta dentro de query>search
      pluck('query','search')
    )
  }


}
