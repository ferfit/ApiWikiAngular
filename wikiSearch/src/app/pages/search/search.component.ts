import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {debounceTime, tap,map, distinctUntilChanged, filter} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  //enlaza al input del form
  inputSearch = new FormControl(''); //importar el modulo de ReactiveFormModule, en el modulo mas  cercano

  @Output() DatoInput = new EventEmitter<string>();


  constructor() {

   }

  ngOnInit(): void {
    this.inputCambia();
  }

  inputCambia():void {
    //valueChanges me trae el valor del input, es un Observable

    //configuracion al principio
    /* this.inputSearch.valueChanges
    .pipe(
      tap(res => console.log(res)) //lo puestro por clg
    )
    .subscribe() */

    //le paso el valor que ingresa en el input
    this.inputSearch.valueChanges
    .pipe( //search es lo que viene en el input
      map((search:string)=> search.trim()),
      debounceTime(350),
      distinctUntilChanged(), //verifica el valor a emitir que no sea igual al anterior
      filter((search:string) => search !==''),
      tap(search => this.DatoInput.emit(search) ) //el res dentro del metodo emit, seria el valor del input
    )
    .subscribe()
  }

}
