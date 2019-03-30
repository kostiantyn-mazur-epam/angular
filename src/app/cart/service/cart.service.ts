import { Injectable, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private productSource = new Subject<string>();
  product$ = this.productSource.asObservable();

  constructor() { }

  onBuy(productName: string) {
    this.productSource.next(productName);
  }
}
