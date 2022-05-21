import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  public stories: any;
  constructor(private service: ServiceService) {
    this.getData();
  }

  ngOnInit(): void {}
  getData() {
    this.stories = this.service
      .getArticles()
      .pipe(map((data: any) => data.results));
  }
}
