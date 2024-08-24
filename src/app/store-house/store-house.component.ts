import { Component, OnInit } from '@angular/core';
import { AppliancesService } from '../appliances.service';
import { CommonModule } from '@angular/common'; // Імпорт CommonModule

@Component({
  selector: 'app-store-house',
  standalone: true,
  imports: [CommonModule], // Додати CommonModule до імпортів
  templateUrl: './store-house.component.html',
  styleUrls: ['./store-house.component.css']
})
export class StoreHouseComponent implements OnInit {
  applis = [
    { name: "", category: "", manufacture: "", image: "", price: 0, discount: 0 }
  ];

  constructor(private newAppli: AppliancesService) {}

  ngOnInit() {
    this.applis = this.newAppli.getAppl();
    console.log(this.applis); // Перевірка даних
  }
}



