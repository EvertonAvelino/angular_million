import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fazerLogin(){
    new Cliente().fazerLogin(error =>{
      if(error){
        alert("Erro ao fazer login")
      }
      //this.navigator.navigateUrl("/")
   });
  }

}
