import { Component, OnInit } from '@angular/core';
import { AppliancesService } from '../appliances.service';

@Component({
  selector: 'app-store-house',
  standalone: true,
  imports: [],
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



