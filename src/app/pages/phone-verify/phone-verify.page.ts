import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { W360Service } from 'src/app/providers/w360.service';

@Component({
  selector: 'app-phone-verify',
  templateUrl: './phone-verify.page.html',
  styleUrls: ['./phone-verify.page.scss'],
})
export class PhoneVerifyPage implements OnInit {
  public signup : FormGroup;
  
  constructor(
    public w360Service: W360Service,
    private formBuilder: FormBuilder,
    private router: Router) { 
    this.signup = this.formBuilder.group({
      name:['', [Validators.required, Validators.pattern('[A-Za-z0-9 ]{2,}')]],
      email:['', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
      mobile:['', [Validators.required, Validators.pattern('[0]{1}[7]{1}[0-9]{8}'), Validators.minLength(10)]]
    });
  }

  ngOnInit() {
  }
  
  ionViewWillLoad() {

  }

  validation_messages = {
    'name': [
      { type: 'required', message: '* Name is required!' },
      { type: 'pattern', message: '* Not a valid name!' }
    ],
    'email': [
      { type: 'required', message: '* Email is required!' },
      { type: 'pattern', message: '* Not a valid e-mail!' }
    ],
    'mobile': [
      { type: 'required', message: '* Mobile number is required!' },
      { type: 'pattern', message: '* Not a valid mobile number!' }
    ]
  };

  submitDetails(){
    console.log(this.signup.value);
    this.w360Service.user_name = this.signup.get('name').value;
    this.w360Service.user_phone = this.signup.get('mobile').value;
    this.w360Service.user_email = this.signup.get('email').value;
    this.router.navigateByUrl("/otp");
  }
}
