// import { Injectable } from '@angular/core';
// import { APPLIANCES } from './mock-appliances';

// @Injectable({
//   providedIn: 'root'
// })
// export class AppliancesService {

//   constructor() { }
//   getAppl() {
//     return APPLIANCES;
//   }
// }
import { Injectable } from '@angular/core';
import { APPLIANCES } from './mock-appliances';

@Injectable({
  providedIn: 'root'
})
export class AppliancesService {
  getAppl() {
    return APPLIANCES;
  }
}
