import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreHouseComponent } from './store-house/store-house.component'; // Імпорт StoreHouseComponent
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StoreHouseComponent],// Додати StoreHouseComponent сюди
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storeHouse';
}
