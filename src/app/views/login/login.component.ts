import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginModel = new User();

  onSubmit() {
    console.log(this.loginModel)
    let email = this.loginModel.email
    let senha = this.loginModel.password
    this.loginModel.email = ""
    this.loginModel.password = ""
    console.log(`O email é "${email}" e a senha é "${senha}"`)
  }

}
