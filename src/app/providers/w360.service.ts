import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class W360Service {

  constructor() { }
  isLoggedIn: boolean = false;
  user_name: string = '';
  user_phone: string = '';
  user_email: string = '';

}
