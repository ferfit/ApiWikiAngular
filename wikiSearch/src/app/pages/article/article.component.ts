import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../search/services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article!:Article

  constructor() { }

  ngOnInit(): void {
  }

}
