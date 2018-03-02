import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './store-menu';

import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-store',
  template: `
    <ngx-main-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet>HELLO WORLD</router-outlet>
    </ngx-main-layout>
  `
})
export class StoreComponent {
  menu: NbMenuItem[];



  
}
