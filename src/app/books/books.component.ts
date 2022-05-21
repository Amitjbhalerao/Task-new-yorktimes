import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor(private service: ServiceService) {}
  books: any;
  ngOnInit(): void {
    this.getbookshistory();
  }
  getbookshistory() {
    this.books = this.service.getbooks().pipe(map((data: any) => data.results));
  }
}
