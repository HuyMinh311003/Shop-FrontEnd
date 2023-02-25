import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shop-Server';
  constructor(private itemService: ItemService) { }

  books$: any = new Observable<Object>
  id: string = '';
  name: string = '';
  price: string = '';
  publisher: string = '';

  getAllBook() {
    this.books$ = this.itemService.getAllBook();
  }

  postBook() {
    this.itemService.postBook({
      id: this.id,
      name: this.name,
      price: this.price,
      publisher: this.publisher
    });

    this.id = '';
    this.name = '';
    this.price = '';
    this.publisher = '';
  }
}
