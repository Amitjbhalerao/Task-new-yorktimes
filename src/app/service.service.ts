import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private service: HttpClient) {}
  getArticles() {
    return this.service.get(
      'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=JwlUybx9OIkITiIwXnoUxaQAf9fj5Q8K'
    );
  }
  getbooks() {
    return this.service.get(
      'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=JwlUybx9OIkITiIwXnoUxaQAf9fj5Q8K'
    );
  }
}
